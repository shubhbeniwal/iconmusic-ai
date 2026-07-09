from fastapi import FastAPI

from spotify import (
    get_access_token,
    search_song
)

from ai import extract_music_mood

from spotify import search_tracks_by_mood

from music_vectorstore import (
    recommend_songs
)

app = FastAPI()


@app.get("/")
def home():

    return {
        "message": "IconMusic AI Backend Running"
    }


@app.get("/token")
def token():

    token = get_access_token()

    return {
        "success": True,
        "token_length": len(token)
    }
    
@app.get("/search")
def search(query: str):

    results = search_song(query)

    tracks = []

    for track in results["tracks"]["items"]:

        tracks.append({

            "name":
            track["name"],

            "artist":
            track["artists"][0]["name"],

            "album":
            track["album"]["name"],

            "spotify_url":
            track["external_urls"]["spotify"]

        })

    return tracks

@app.get("/mood")
def mood(text: str):

    keywords = extract_music_mood(
        text
    )

    return {
        "keywords": keywords
    }
    
@app.get("/recommend")
def recommend(text: str):

    moods = extract_music_mood(
        text
    )

    first_mood = moods.split(",")[0].strip()

    songs = search_tracks_by_mood(
        first_mood
    )

    return {

        "user_feeling": text,

        "detected_moods": moods,

        "recommendations": songs

    }
    
    
@app.get("/semantic-search")
def semantic_search(
    text: str
):

    songs = recommend_songs(
        text
    )

    return songs