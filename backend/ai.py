import os

from groq import Groq

from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv(
        "GROQ_API_KEY"
    )
)


def extract_music_mood(user_text):

    prompt = f"""
You are a music recommendation expert.

Convert the user's feeling into
3-5 music mood keywords.

Return ONLY comma separated keywords.

User:
{user_text}
"""

    response = client.chat.completions.create(

        model="llama-3.3-70b-versatile",

        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],

        temperature=0.3

    )

    return response.choices[0].message.content


def enrich_song(song):

    prompt = f"""
You are a music expert.

Song:
{song['title']}
Artist:
{song['artist']}

Generate JSON only:

{{
  "description": "...",
  "themes": ["..."],
  "energy": "low/medium/high"
}}
"""

    response = client.chat.completions.create(

        model="llama-3.3-70b-versatile",

        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],

        temperature=0.3

    )

    return response.choices[0].message.content