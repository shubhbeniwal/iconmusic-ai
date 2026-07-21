const STORAGE_KEY = "iconmusic_favorites"

export type FavoriteSong = {

  title: string

  artist: string

  image?: string

  song?: Record<string, unknown>

}

function readFavorites(): FavoriteSong[] {

  if (typeof window === "undefined") {

    return []

  }

  try {

    const raw = localStorage.getItem(
      STORAGE_KEY
    )

    if (!raw) {

      return []

    }

    const parsed = JSON.parse(raw)

    if (!Array.isArray(parsed)) {

      return []

    }

    return parsed

  }

  catch {

    return []

  }

}

function writeFavorites(

  favorites: FavoriteSong[]

) {

  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(favorites)

  )

}

export function getFavorites(): FavoriteSong[] {

  return readFavorites()

}

export function saveFavorite(

  song: FavoriteSong

) {

  const favorites = readFavorites()

  const exists = favorites.some(

    (item) =>

      item.title.toLowerCase() ===
      song.title.toLowerCase()

  )

  if (exists) {

    return

  }

  writeFavorites([
    ...favorites,
    song
  ])

}

export function removeFavorite(

  title: string

) {

  const favorites = readFavorites()

  writeFavorites(

    favorites.filter(

      (item) =>

        item.title.toLowerCase() !==
        title.toLowerCase()

    )

  )

}

export function isFavorite(

  title: string

): boolean {

  return readFavorites().some(

    (item) =>

      item.title.toLowerCase() ===
      title.toLowerCase()

  )

}
