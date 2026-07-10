import json

from ai import client


def detect_mood(user_text):

    prompt = f"""
You are an AI music coach.

Analyze the user's message.

Return ONLY valid JSON.

Example:

{{
    "mood": "stressed",
    "search_query": "calming relaxing healing music",
    "message": "You seem mentally exhausted and stressed."
}}

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

    content = response.choices[0].message.content

    content = content.replace(
        "```json",
        ""
    )

    content = content.replace(
        "```",
        ""
    )

    return json.loads(
        content.strip()
    )