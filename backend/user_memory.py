import json

USER_FILE = "data/users.json"


def load_user():

    with open(
        USER_FILE,
        "r",
        encoding="utf-8"
    ) as f:

        users = json.load(f)

    return users["default_user"]


def save_user(user):

    data = {
        "default_user": user
    }

    with open(
        USER_FILE,
        "w",
        encoding="utf-8"
    ) as f:

        json.dump(
            data,
            f,
            indent=4
        )
        
def like_artist(artist):

    user = load_user()

    if artist not in user["favorite_artists"]:

        user["favorite_artists"].append(
            artist
        )

    save_user(user)
    
def like_genre(genre):

    user = load_user()

    if genre not in user["favorite_genres"]:

        user["favorite_genres"].append(
            genre
        )

    save_user(user)
    
    
def like_song(song):

    user = load_user()

    if song not in user["liked_songs"]:

        user["liked_songs"].append(song)

    save_user(user)
    

def dislike_song(song):

    user = load_user()

    if song not in user["disliked_songs"]:

        user["disliked_songs"].append(song)

    save_user(user)
    
def learn_from_song(song_data):

    user = load_user()

    artist = song_data.get("artist")
    genre = song_data.get("genre")

    if artist:

        if artist not in user["favorite_artists"]:

            user["favorite_artists"].append(
                artist
            )

        artist_scores = user.setdefault(
            "artist_scores",
            {}
        )

        artist_scores[
            artist
        ] = artist_scores.get(
            artist,
            0
        ) + 1

    if genre:

        if genre not in user["favorite_genres"]:

            user["favorite_genres"].append(
                genre
            )

        genre_scores = user.setdefault(
            "genre_scores",
            {}
        )

        genre_scores[
            genre
        ] = genre_scores.get(
            genre,
            0
        ) + 1

    save_user(user)