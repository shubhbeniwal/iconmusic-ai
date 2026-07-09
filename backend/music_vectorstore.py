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

    embedding = model.encode(
        query
    ).tolist()

    results = collection.query(

        query_embeddings=[
            embedding
        ],

        n_results=10

    )

    songs = results["metadatas"][0]
    
    user = load_user()

    ranked = []

    for song in songs:

        query_embedding = model.encode(
            query,
            convert_to_tensor=True
        )

        score = 0

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
        ).lower()

        query_lower = query.lower()

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
            query_embedding,
            song_embedding
        ).item()

        score = similarity

        if song["artist"] in user[
            "favorite_artists"
        ]:

            score += 0.20

        if song["genre"] in user[
            "favorite_genres"
        ]:

            score += 0.15
            
            
        if any(
            word in description
            for word in query_lower.split()
        ):
            score += 1

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