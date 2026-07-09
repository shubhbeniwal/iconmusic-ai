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
    
    
