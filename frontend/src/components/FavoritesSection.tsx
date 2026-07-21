"use client"

import { useEffect, useMemo, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

import {

  getFavorites,

  type FavoriteSong

} from "@/lib/favorites"

import { getArtwork } from "@/lib/artwork"

import SectionTitle from "@/components/SectionTitle"

type CollectionKey =

  | "healing"
  | "motivational"
  | "lateNight"
  | "hopeful"
  | "heartbreak"
  | "other"

type CollectionConfig = {

  key: CollectionKey

  label: string

  emoji: string

}

const COLLECTIONS: CollectionConfig[] = [

  {
    key: "healing",
    label: "Healing",
    emoji: "❤️"
  },

  {
    key: "motivational",
    label: "Motivational",
    emoji: "⚡"
  },

  {
    key: "lateNight",
    label: "Late Night",
    emoji: "🌙"
  },

  {
    key: "hopeful",
    label: "Hopeful",
    emoji: "✨"
  },

  {
    key: "heartbreak",
    label: "Heartbreak",
    emoji: "💔"
  },

  {
    key: "other",
    label: "Other",
    emoji: "🎵"
  }

]

const MOOD_TO_COLLECTION: Record<string, CollectionKey> = {

  healing: "healing",

  emotional: "healing",

  calming: "healing",

  chill: "healing",

  motivational: "motivational",

  powerful: "motivational",

  energetic: "motivational",

  gym: "motivational",

  uplifting: "motivational",

  epic: "motivational",

  determined: "motivational",

  empowering: "motivational",

  strong: "motivational",

  "late-night": "lateNight",

  "night-drive": "lateNight",

  nostalgic: "lateNight",

  moody: "lateNight",

  dreamy: "lateNight",

  longing: "lateNight",

  hopeful: "hopeful",

  warm: "hopeful",

  happy: "hopeful",

  heartbreak: "heartbreak",

  sad: "heartbreak",

  reflective: "heartbreak"

}

function getFirstMood(

  item: FavoriteSong

): string | null {

  const moods = item.song?.moods

  if (!Array.isArray(moods) || moods.length === 0) {

    return null

  }

  const first = moods[0]

  if (typeof first !== "string") {

    return null

  }

  return first.toLowerCase().trim()

}

function resolveCollection(

  item: FavoriteSong

): CollectionKey {

  const firstMood = getFirstMood(item)

  if (!firstMood) {

    return "other"

  }

  return MOOD_TO_COLLECTION[firstMood] ?? "other"

}

function groupFavoritesByCollection(

  favorites: FavoriteSong[]

): Map<CollectionKey, FavoriteSong[]> {

  const groups = new Map<
    CollectionKey,
    FavoriteSong[]
  >()

  for (const collection of COLLECTIONS) {

    groups.set(collection.key, [])

  }

  for (const item of favorites) {

    const key = resolveCollection(item)

    groups.get(key)?.push(item)

  }

  return groups

}

function FavoriteCard({

  item

}: {

  item: FavoriteSong

}) {

  return (

    <motion.div

      whileHover={{
        y: -4,
        scale: 1.03
      }}

      whileTap={{
        scale: 0.98
      }}

      transition={{
        duration: 0.2
      }}

      className="
      min-w-[180px]
      bg-zinc-900/90
      rounded-2xl
      overflow-hidden
      border
      border-zinc-800
      transition-all
      duration-300
      hover:border-zinc-600
      "
    >

      <img

        src={
          item.image ||
          getArtwork(item.title)
        }

        alt={item.title}

        className="
        h-28
        w-full
        object-cover
        "
      />

      <div className="p-3">

        <p
          className="
          font-semibold
          text-sm
          "
        >
          {item.title}
        </p>

        <p
          className="
          text-zinc-500
          text-xs
          mt-1
          "
        >
          {item.artist}
        </p>

      </div>

    </motion.div>

  )

}

type Props = {

  refreshKey?: number

}

export default function FavoritesSection({

  refreshKey = 0

}: Props) {

  const [favorites, setFavorites] =
    useState<FavoriteSong[]>([])

  useEffect(() => {

    setFavorites(
      getFavorites()
    )

  }, [refreshKey])

  const grouped = useMemo(

    () => groupFavoritesByCollection(favorites),

    [favorites]

  )

  const activeCollections = useMemo(

    () =>

      COLLECTIONS.filter(

        (collection) =>

          (grouped.get(collection.key)?.length ?? 0) > 0

      ),

    [grouped]

  )

  if (favorites.length === 0) {

    return null

  }

  return (

    <div className="mt-8">

      <SectionTitle

        title="Your Favorites"

        subtitle="Songs you saved"

      />

      <AnimatePresence mode="popLayout">

        {

          activeCollections.map(

            (collection, sectionIndex) => {

              const items =
                grouped.get(collection.key) ?? []

              return (

                <motion.div

                  key={collection.key}

                  layout

                  initial={{
                    opacity: 0,
                    y: 20
                  }}

                  animate={{
                    opacity: 1,
                    y: 0
                  }}

                  exit={{
                    opacity: 0,
                    y: -10
                  }}

                  transition={{
                    duration: 0.4,
                    delay: sectionIndex * 0.08
                  }}

                  className="mt-6"

                >

                  <h3
                    className="
                    text-lg
                    font-semibold
                    mb-3
                    "
                  >

                    {collection.emoji}{" "}
                    {collection.label}

                  </h3>

                  <div
                    className="
                    flex
                    gap-4
                    overflow-x-auto
                    pb-4
                    "
                  >

                    {

                      items.map(

                        (item) => (

                          <FavoriteCard

                            key={item.title}

                            item={item}

                          />

                        )

                      )

                    }

                  </div>

                </motion.div>

              )

            }

          )

        }

      </AnimatePresence>

    </div>

  )

}
