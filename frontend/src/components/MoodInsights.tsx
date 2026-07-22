"use client"

import { useEffect, useState } from "react"

import {

  getMoodHistory

} from "@/lib/moodHistory"

const moodEmoji: Record<string,string> = {

  healing: "❤️",

  hopeful: "✨",

  motivational: "⚡",

  heartbreak: "💔",

  lateNight: "🌙"

}

export default function MoodInsights() {

  const [topMood,setTopMood] =

    useState<string | null>(null)

  const [count,setCount] =

    useState(0)

  const [total,setTotal] =

    useState(0)

  useEffect(() => {

    const history =

      getMoodHistory()

    if (

      history.length === 0

    ) {

      return

    }

    const frequency:

      Record<string,number> = {}

    history.forEach(

      (item) => {

        frequency[item.mood] =

          (frequency[item.mood] || 0)

          + 1

      }

    )

    const winner =

      Object.entries(frequency)

      .sort(

        (a,b) =>

          b[1] - a[1]

      )[0]

    setTopMood(

      winner[0]

    )

    setCount(

      winner[1]

    )

    setTotal(

      history.length

    )

  }, [])

  if (!topMood) {

    return null

  }

  return (

    <div

      className="

      mt-8

      bg-zinc-900/80

      border

      border-zinc-800

      rounded-3xl

      p-5

      "

    >

      <p

        className="

        text-xs

        uppercase

        tracking-wide

        text-zinc-500

        "

      >

        Mood Pattern

      </p>

      <div

        className="

        mt-3

        flex

        items-center

        gap-3

        "

      >

        <span className="text-3xl">

          {

            moodEmoji[topMood]

            ||

            "🎵"

          }

        </span>

        <div>

          <p className="font-semibold">

            {topMood}

          </p>

          <p

            className="

            text-sm

            text-zinc-500

            "

          >

            Most common mood

          </p>

        </div>

      </div>

      <p

        className="

        mt-4

        text-sm

        text-zinc-400

        "

      >

        {count} of last {total}

        {" "}sessions

      </p>

    </div>

  )

}