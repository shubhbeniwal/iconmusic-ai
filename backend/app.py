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

from user_memory import (
    load_user,
    like_artist,
    like_genre,
    like_song,
    dislike_song
)

from music_vectorstore import (
    find_song_by_title
)

from user_memory import (
    learn_from_song
)

from music_coach import detect_mood

from memory import (
    load_memory,
    save_memory
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

@app.post("/like-artist")
def add_artist(

    artist: str

):

    like_artist(
        artist
    )

    return {
        "message":
        f"{artist} saved"
    }
    
    
@app.post("/like-genre")
def add_genre(

    genre: str

):

    like_genre(
        genre
    )

    return {
        "message":
        f"{genre} saved"
    }
    
@app.get("/profile")
def profile():

    return load_user()

@app.post("/like-song")
def add_like_song(

    song: str

):

    like_song(song)

    song_data = find_song_by_title(
        song
    )

    if song_data:

        learn_from_song(
            song_data
        )

    return {
        "message":
        f"{song} liked and learned"
    }

    like_song(song)

    return {
        "message":
        f"{song} liked"
    }
 
    
@app.post("/dislike-song")
def add_dislike_song(

    song: str

):

    dislike_song(song)

    return {
        "message":
        f"{song} disliked"
    }


@app.get(
    "/music-coach"
)
def music_coach(

    text: str

):

    mood_data = detect_mood(
        text
    )

    recommendations = recommend_songs(

        mood_data[
            "search_query"
        ],
        
        mood_data[
            "mood"
        ]

    )
    
    save_memory(

        {

            "last_query": text,

            "last_detected_mood":

            mood_data[
                "mood"
            ],

            "last_search_query":

            mood_data[
                "search_query"
            ],

            "last_recommendations":

            [

                item["song"]["title"]

                for item in recommendations

            ]

        }

    )

    return {

        "detected_mood":
        mood_data[
            "mood"
        ],

        "coach_message":
        mood_data[
            "message"
        ],

        "recommendations":
        recommendations

    }
    
@app.get(
    "/memory"
)
def memory():

    return load_memory()





def build_followup_message(

    mood

):

    messages = {

        "motivated":
        "You wanted motivation earlier. Here are more high-energy recommendations.",

        "exhausted":
        "You were feeling exhausted. These songs continue that relaxing vibe.",

        "heartbroken":
        "Keeping the emotional tone from your previous session."

    }

    return messages.get(

        mood,

        "Continuing your previous music session."

    )
    
@app.get(
    "/continue-session"
)
def continue_session():

    memory = load_memory()

    if not memory:

        return {
            "error":
            "No previous session found"
        }

    recommendations = recommend_songs(

        memory[
            "last_search_query"
        ],

        memory[
            "last_detected_mood"
        ]

    )
    message = build_followup_message(

        memory[
            "last_detected_mood"
        ]

    )
    
    return {

        "based_on":
        memory[
            "last_query"
        ],

        "detected_mood":
        memory[
            "last_detected_mood"
        ],

        "message":
        message,

        "recommendations":
        recommendations

    }