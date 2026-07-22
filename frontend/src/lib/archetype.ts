import { getMoodHistory } from "./moodHistory"

export type Archetype = {

  title: string

  emoji: string

  description: string

}

export function getArchetype(): Archetype {

  const history = getMoodHistory()

  if (history.length < 5) {

    return {

      title: "Explorer",

      emoji: "🎵",

      description:
        "Still discovering your music personality."

    }

  }

  const counts: Record<string, number> = {}

  history.forEach((item) => {

    const mood = item.mood.toLowerCase()

    counts[mood] = (counts[mood] || 0) + 1

  })

  const dominantMood =

    Object.entries(counts)

      .sort((a, b) => b[1] - a[1])[0][0]

  if (

    dominantMood.includes("motiv")

  ) {

    return {

      title: "Motivator",

      emoji: "⚡",

      description:
        "You seek energy, momentum and growth."

    }

  }

  if (

    dominantMood.includes("nostalg")

  ) {

    return {

      title: "Dreamer",

      emoji: "🌙",

      description:
        "You enjoy memories, reflection and emotional depth."

    }

  }

  if (

    dominantMood.includes("hope")

  ) {

    return {

      title: "Optimist",

      emoji: "✨",

      description:
        "You gravitate toward positivity and possibility."

    }

  }

  if (

    dominantMood.includes("heal")

  ) {

    return {

      title: "Healer",

      emoji: "❤️",

      description:
        "Music is part of your personal growth journey."

    }

  }

  return {

    title: "Night Owl",

    emoji: "🌃",

    description:
      "You enjoy emotional and late-night listening."

  }

}