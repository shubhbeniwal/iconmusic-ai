"use client"

import {

  clearFavorites

} from "@/lib/favorites"

import {

  clearActivity

} from "@/lib/activity"

import {

  clearMoodHistory

} from "@/lib/moodHistory"

export default function MePage() {

  const handleReset = () => {

    clearFavorites()

    clearActivity()

    clearMoodHistory()

    window.location.reload()

  }

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

        Me

      </h1>

      <p
        className="
        text-zinc-500
        mb-8
        "
      >

        Profile & Settings

      </p>

      <div
        className="
        bg-zinc-900/80
        border
        border-zinc-800
        rounded-3xl
        p-5
        "
      >

        <h2
          className="
          font-semibold
          mb-2
          "
        >

          Reset Data

        </h2>

        <p
          className="
          text-sm
          text-zinc-500
          mb-4
          "
        >

          Clears favorites,
          activity and mood history

        </p>

        <button

          onClick={handleReset}

          className="
          px-4
          py-3
          rounded-2xl
          bg-red-600
          hover:bg-red-500
          transition-colors
          "

        >

          Clear Everything

        </button>

      </div>

    </main>

  )

}