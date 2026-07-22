import { getMoodHistory } from "./moodHistory"

export function generateListeningInsight() {

  const history = getMoodHistory()

  if (history.length < 3) {

    return "I'm still learning your listening habits."

  }

  const counts: Record<string, number> = {}

  history.forEach((item) => {

    const mood = item.mood.toLowerCase()

    counts[mood] = (counts[mood] || 0) + 1

  })

  const dominantMood = Object.entries(counts)

    .sort((a, b) => b[1] - a[1])[0]

  return `Your recent listening pattern leans toward ${dominantMood[0]}.`

}