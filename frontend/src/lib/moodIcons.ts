export const moodIcons: Record<string, string> = {

  healing: "💙",

  hopeful: "✨",

  emotional: "🌊",

  nostalgic: "🌙",

  motivational: "🔥",

  energetic: "⚡",

  romantic: "💖",

  dreamy: "☁️",

  chill: "🌿",

  happy: "☀️",

  empowering: "👑",

  strong: "💪",

  gym: "🏋️",

  reflective: "📖",

  heartbreak: "🖤",

  sad: "🌧️",

}

export function getMoodIcon(

  mood: string

) {

  return (

    moodIcons[

      mood.toLowerCase()

    ]

    ||

    "🎵"

  )

}