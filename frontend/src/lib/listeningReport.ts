import { getMoodHistory } from "./moodHistory"
import { getFavorites } from "./favorites"
import { getActivity } from "./activity"
import { getArchetype } from "./archetype"

export type ListeningReport = {

  totalSessions: number

  dominantMood: string

  favoriteSongs: number

  activityCount: number

  archetype: string

  trend: string

}

export function generateListeningReport():

ListeningReport {

  const moods =
    getMoodHistory()

  const favorites =
    getFavorites()

  const activity =
    getActivity()

  const archetype =
    getArchetype()

  const moodCounts:
    Record<string, number> = {}

  moods.forEach((item) => {

    const mood =
      item.mood.toLowerCase()

    moodCounts[mood] =
      (moodCounts[mood] || 0) + 1

  })

  const dominantMood =

    Object.entries(moodCounts)

      .sort((a, b) =>

        b[1] - a[1]

      )[0]?.[0] ||

      "Unknown"

  let trend =

    "Still learning"

  if (moods.length >= 5) {

    trend =

      `Moving toward ${dominantMood}`

  }

  return {

    totalSessions:
      moods.length,

    dominantMood,

    favoriteSongs:
      favorites.length,

    activityCount:
      activity.length,

    archetype:
      archetype.title,

    trend

  }

}