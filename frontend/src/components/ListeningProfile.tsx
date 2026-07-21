"use client"

import { useMemo } from "react"

import {
  FavoriteSong
} from "@/lib/favorites"

type Props = {
  favorites: FavoriteSong[]
}

export default function ListeningProfile({
  favorites
}: Props) {

  const profile = useMemo(() => {

    const genreCount: Record<string, number> = {}

    const moodCount: Record<string, number> = {}

    const energyCount: Record<string, number> = {}

    favorites.forEach((item) => {

      const song = item.song as any

      if (!song) return

      if (song.genre) {

        genreCount[song.genre] =
          (genreCount[song.genre] || 0) + 1

      }

      if (song.energy) {

        energyCount[song.energy] =
          (energyCount[song.energy] || 0) + 1

      }

      if (song.moods) {

        song.moods.forEach((mood: string) => {

          moodCount[mood] =
            (moodCount[mood] || 0) + 1

        })

      }

    })

    const topGenre =
      Object.entries(genreCount)
        .sort((a,b) => b[1]-a[1])[0]?.[0]

    const topMood =
      Object.entries(moodCount)
        .sort((a,b) => b[1]-a[1])[0]?.[0]

    const topEnergy =
      Object.entries(energyCount)
        .sort((a,b) => b[1]-a[1])[0]?.[0]

    return {
      topGenre,
      topMood,
      topEnergy
    }

  }, [favorites])

  if (favorites.length === 0) return null

  return (

    <div
      className="
      mt-8
      bg-zinc-900/90
      rounded-3xl
      border
      border-zinc-800
      p-5
      "
    >

      <h2
        className="
        text-lg
        font-semibold
        mb-4
        "
      >
        Your Listening Profile
      </h2>

      <div className="space-y-3">

        <p>
          🎵 Favorite Genre:
          <span className="text-green-400 ml-2">
            {profile.topGenre}
          </span>
        </p>

        <p>
          💙 Top Mood:
          <span className="text-green-400 ml-2">
            {profile.topMood}
          </span>
        </p>

        <p>
          ⚡ Energy Preference:
          <span className="text-green-400 ml-2">
            {profile.topEnergy}
          </span>
        </p>

        <p>
          📀 Saved Songs:
          <span className="text-green-400 ml-2">
            {favorites.length}
          </span>
        </p>

      </div>

    </div>

  )

}