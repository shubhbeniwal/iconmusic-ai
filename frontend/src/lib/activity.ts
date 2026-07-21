const STORAGE_KEY = "iconmusic_activity"

export type ActivityItem = {

  id: string

  type:
    | "song"
    | "mood"

  title: string

  timestamp: number

}

export function getActivity() {

  if (typeof window === "undefined") {

    return []

  }

  const raw = localStorage.getItem(
    STORAGE_KEY
  )

  if (!raw) {

    return []

  }

  return JSON.parse(raw)

}

export function addActivity(

  activity: ActivityItem

) {

  const current = getActivity()

  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify([

      activity,

      ...current

    ].slice(0, 30))

  )

}