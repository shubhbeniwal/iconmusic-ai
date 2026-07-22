const STORAGE_KEY = "iconmusic_mood_history"

export type MoodHistoryEntry = {

  id: string

  mood: string

  timestamp: number

}

function readHistory(): MoodHistoryEntry[] {

  if (typeof window === "undefined") {

    return []

  }

  try {

    const raw =
      localStorage.getItem(
        STORAGE_KEY
      )

    if (!raw) {

      return []

    }

    return JSON.parse(raw)

  }

  catch {

    return []

  }

}

function writeHistory(

  entries: MoodHistoryEntry[]

) {

  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(entries)

  )

}

export function addMoodHistory(

  mood: string

) {

  const history = readHistory()

  history.unshift({

    id: crypto.randomUUID(),

    mood,

    timestamp: Date.now()

  })

  writeHistory(

    history.slice(0, 30)

  )

}

export function getMoodHistory() {

  return readHistory()

}

export function clearMoodHistory() {

  if (typeof window === "undefined") {

    return

  }

  localStorage.removeItem(

    "iconmusic_mood_history"

  )

}