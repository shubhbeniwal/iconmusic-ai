import os
import requests

from dotenv import load_dotenv

load_dotenv()

CLIENT_ID = os.getenv(
    "SPOTIFY_CLIENT_ID"
)

CLIENT_SECRET = os.getenv(
    "SPOTIFY_CLIENT_SECRET"
)


def get_access_token():

    url = "https://accounts.spotify.com/api/token"

    response = requests.post(

        url,

        data={
            "grant_type": "client_credentials"
        },

        auth=(
            CLIENT_ID,
            CLIENT_SECRET
        )

    )

    data = response.json()

    return data["access_token"]

def search_song(query):

    token = get_access_token()

    url = "https://api.spotify.com/v1/search"

    headers = {
        "Authorization": f"Bearer {token}"
    }

    params = {
        "q": query,
        "type": "track",
        "limit": 5
    }

    response = requests.get(
        url,
        headers=headers,
        params=params
    )

    return response.json()

def search_tracks_by_mood(mood):

    token = get_access_token()

    url = "https://api.spotify.com/v1/search"

    headers = {
        "Authorization": f"Bearer {token}"
    }

    params = {
        "q": mood,
        "type": "track",
        "limit": 10
    }

    response = requests.get(
        url,
        headers=headers,
        params=params
    )

    data = response.json()

    songs = []

    for track in data["tracks"]["items"]:

        songs.append({

            "name":
            track["name"],

            "artist":
            track["artists"][0]["name"],

            "album":
            track["album"]["name"],

            "spotify_url":
            track["external_urls"]["spotify"]

        })

    return songs