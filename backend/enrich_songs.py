import json

from ai import enrich_song

with open(
    "data/songs.json",
    "r",
    encoding="utf-8"
) as f:

    songs = json.load(f)

enriched_songs = []

for song in songs:

    try:

        enriched = enrich_song(song)

        enriched_json = json.loads(
            enriched
        )

        song["description"] = (
            enriched_json["description"]
        )

        song["themes"] = (
            enriched_json["themes"]
        )

        song["energy"] = (
            enriched_json["energy"]
        )

        enriched_songs.append(
            song
        )

        print(
            f"Done: {song['title']}"
        )

    except Exception as e:

        print(e)

with open(

    "data/enriched_songs.json",

    "w",

    encoding="utf-8"

) as f:

    json.dump(

        enriched_songs,

        f,

        indent=4,

        ensure_ascii=False

    )

print(
    "Enriched dataset created."
)