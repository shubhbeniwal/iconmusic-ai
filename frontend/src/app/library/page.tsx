"use client"

import { useState } from "react"

import FavoritesSection
from "@/components/FavoritesSection"

export default function LibraryPage() {

  const [refreshKey] =

    useState(0)

  return (

    <main
      className="
      min-h-screen
      bg-black
      text-white
      px-6
      pt-10
      pb-32
      "
    >

      <h1
        className="
        text-3xl
        font-bold
        mb-2
        "
      >

        Your Library

      </h1>

      <p
        className="
        text-zinc-500
        mb-8
        "
      >

        Saved songs and collections

      </p>

      <FavoritesSection

        refreshKey={refreshKey}

      />

    </main>

  )

}