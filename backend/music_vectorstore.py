import json
import chromadb

from sentence_transformers import SentenceTransformer

from sentence_transformers import util

from user_memory import load_user

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
    
def recommend_songs(query):

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

        score = similarity

        # Preference boosts
        if song.get("artist") in user["favorite_artists"]:

            score += 0.50

        if song.get("genre") in user["favorite_genres"]:

            score += 0.30

        ranked.append(
            {
                "score": score,
                "song": song
            }
        )

    ranked.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    return ranked[:5]