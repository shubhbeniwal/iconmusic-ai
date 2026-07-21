"use client"

import { useEffect, useState } from "react"

import {

  isFavorite,

  removeFavorite,

  saveFavorite,

  type FavoriteSong

} from "@/lib/favorites"

type Props = {

  title: string

  song: FavoriteSong

  onChange?: () => void

}

export default function FavoriteButton({

  title,

  song,

  onChange

}: Props) {

  const [saved, setSaved] = useState(false)

  useEffect(() => {

    setSaved(
      isFavorite(title)
    )

  }, [title])

  const handleClick = (

    event: React.MouseEvent

  ) => {

    event.stopPropagation()

    if (saved) {

      removeFavorite(title)

      setSaved(false)

    }

    else {

      saveFavorite(song)

      setSaved(true)

    }

    onChange?.()

  }

  return (

    <button

      type="button"

      onClick={handleClick}

      aria-label={
        saved
          ? "Remove from favorites"
          : "Save to favorites"
      }

      className="
      h-10
      w-10
      rounded-full
      bg-black/50
      backdrop-blur-md
      border
      border-white/10
      flex
      items-center
      justify-center
      text-lg
      transition-colors
      duration-200
      hover:bg-black/70
      "
    >

      {saved ? "♥" : "♡"}

    </button>

  )

}
