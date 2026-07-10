import json
import chromadb

from sentence_transformers import SentenceTransformer

from sentence_transformers import util

from user_memory import load_user

from mood_profiles import MOOD_PROFILES

client = chromadb.PersistentClient(
    path="./chroma_db"
)

collection = client.get_or_create_collection(
    name="songs"
)

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


def build_song_index():

    with open(
        "data/songs.json",
        "r",
        encoding="utf-8"
    ) as file:

        songs = json.load(file)

    
    try:
        client.delete_collection("songs")
    except:
        pass

    collection = client.get_or_create_collection(
        name="songs"
    )

    for idx, song in enumerate(songs):

        text = f"""
        {song['title']}
        {song['artist']}
        {' '.join(song['moods'])}
        {song['genre']}
        """

        embedding = model.encode(
            text
        ).tolist()

        collection.add(

            ids=[str(idx)],

            embeddings=[embedding],

            metadatas=[song]

        )

    print(
        "Songs Indexed Successfully"
    )


def generate_explanation(

    song,
    user,
    similarity

):

    reasons = []

    if similarity > 0.40:

        reasons.append(
            "Strong semantic match with your request"
        )

    elif similarity > 0.25:

        reasons.append(
            "Relevant to your request"
        )

    artist_score = user.get(
        "artist_scores",
        {}
    ).get(
        song.get("artist"),
        0
    )

    genre_score = user.get(
        "genre_scores",
        {}
    ).get(
        song.get("genre"),
        0
    )

    if artist_score > 0:

        reasons.append(
            f"You frequently listen to {song['artist']}"
        )

    if genre_score > 0:

        reasons.append(
            f"You enjoy {song['genre']} music"
        )

    moods = song.get(
        "moods",
        []
    )

    if moods:

        reasons.append(
            f"Mood match: {moods[0]}"
        )

    return reasons[:3]

    
def recommend_songs(query, detected_mood=None):

    collection = client.get_collection(
        name="songs"
    )

    user = load_user()

    query_embedding_list = model.encode(
        query
    ).tolist()

    query_embedding_tensor = model.encode(
        query,
        convert_to_tensor=True
    )

    results = collection.query(
        query_embeddings=[
            query_embedding_list
        ],
        n_results=10
    )

    print("RETRIEVED SONGS")

    for song in results["metadatas"][0]:
        print(song["title"])

    songs = results["metadatas"][0]

    # Add favorite artist / genre songs
    extra_songs = []

    all_songs = collection.get()["metadatas"]

    for song in all_songs:

        if song.get("artist") in user["favorite_artists"]:

            extra_songs.append(song)

        elif song.get("genre") in user["favorite_genres"]:

            extra_songs.append(song)

    songs.extend(extra_songs)

    # Remove duplicates
    unique_songs = {}

    for song in songs:

        unique_songs[
            song["title"]
        ] = song

    songs = list(
        unique_songs.values()
    )

    ranked = []

    for song in songs:

        moods = song.get(
            "moods",
            []
        )

        themes = song.get(
            "themes",
            []
        )

        description = song.get(
            "description",
            ""
        )

        search_text = " ".join(
            moods
            +
            themes
            +
            [description]
        )

        song_embedding = model.encode(
            search_text,
            convert_to_tensor=True
        )

        similarity = util.cos_sim(
            query_embedding_tensor,
            song_embedding
        ).item()

        artist_strength = user.get(
            "artist_scores",
            {}
        ).get(
            song.get("artist"),
            0
        )

        genre_strength = user.get(
            "genre_scores",
            {}
        ).get(
            song.get("genre"),
            0
        )

        score = similarity

        import math

        score += math.log1p(
            artist_strength
        ) * 0.08

        score += math.log1p(
            genre_strength
        ) * 0.05
        
        if detected_mood:

            preferred_moods = MOOD_PROFILES.get(

                detected_mood,

                []

            )

            song_moods = song.get(

                "moods",

                []

            )

            matches = len(

                set(
                    preferred_moods
                ).intersection(
                    song_moods
                )

            )

            score += matches * 0.10

        explanation = generate_explanation(

            song,
            user,
            similarity

        )
        
        print(
            song["title"],
            "Similarity:",
            round(similarity, 3),
            "Artist:",
            artist_strength,
            "Genre:",
            genre_strength,
            "Final:",
            round(score, 3)
        )
        
        ranked.append(
            {
                "score": score,
                "song": song,
                "why": explanation
            }
        )

    ranked.sort(
        key=lambda x: x["score"],
        reverse=True
    )
    return ranked[:5]

def find_song_by_title(

    title

):

    collection = client.get_collection(
        name="songs"
    )

    songs = collection.get()[
        "metadatas"
    ]

    for song in songs:

        if song[
            "title"
        ].lower() == title.lower():

            return song

    return None