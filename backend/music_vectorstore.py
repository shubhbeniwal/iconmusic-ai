import json
import chromadb

from sentence_transformers import SentenceTransformer

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

    ranked = []

    for song in songs:

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

        for mood in moods:

            if mood.lower() in query_lower:
                score += 3

        for theme in themes:

            if theme.lower() in query_lower:
                score += 2

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