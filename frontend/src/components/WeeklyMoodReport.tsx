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

export default function WeeklyMoodReport() {

  const [report,setReport] = useState<{

    topMood: string

    count: number

    total: number

    percentage: number

  } | null>(null)

  useEffect(() => {

    const history = getMoodHistory()

    if (history.length === 0) {

      return

    }

    const frequency:

      Record<string,number> = {}

    history.forEach((item) => {

      frequency[item.mood] =

        (frequency[item.mood] || 0) + 1

    })

    const winner =

      Object.entries(frequency)

      .sort(

        (a,b) => b[1] - a[1]

      )[0]

    setReport({

      topMood: winner[0],

      count: winner[1],

      total: history.length,

      percentage: Math.round(

        (winner[1] / history.length) * 100

      )

    })

  }, [])

  if (!report) {

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
        Weekly Mood Report
      </p>

      <div
        className="
        flex
        items-center
        gap-3
        mt-4
        "
      >

        <span className="text-4xl">

          {
            moodEmoji[
              report.topMood
            ] || "🎵"
          }

        </span>

        <div>

          <p className="font-semibold">

            {report.topMood}

          </p>

          <p
            className="
            text-zinc-500
            text-sm
            "
          >

            {report.percentage}%
            of recent sessions

          </p>

        </div>

      </div>

      <div
        className="
        mt-4
        text-sm
        text-zinc-400
        space-y-1
        "
      >

        <p>

          Total sessions:
          {" "}
          {report.total}

        </p>

        <p>

          Most active mood:
          {" "}
          {report.topMood}

        </p>

      </div>

    </div>

  )

}