"use client"

import { useEffect, useState } from "react"

import { motion } from "framer-motion"

import {

  getFavorites,

  type FavoriteSong

} from "@/lib/favorites"

import { getArtwork } from "@/lib/artwork"

import SectionTitle from "@/components/SectionTitle"

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

  if (favorites.length === 0) {

    return null

  }

  return (

    <div className="mt-8">

      <SectionTitle

        title="Your Favorites"

        subtitle="Songs you saved"

      />

      <div
        className="
        flex
        gap-4
        overflow-x-auto
        pb-4
        "
      >

        {

          favorites.map(

            (item) => (

              <motion.div

                key={item.title}

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

          )

        }

      </div>

    </div>

  )

}
