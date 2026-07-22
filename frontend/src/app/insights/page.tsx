"use client"

import { useState } from "react"

import ActivityFeed from "@/components/ActivityFeed"
import MoodJourney from "@/components/MoodJourney"
import MoodInsights from "@/components/MoodInsights"
import WeeklyMoodReport from "@/components/WeeklyMoodReport"

export default function InsightsPage() {

  const [activityRevision] =

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

        Insights

      </h1>

      <p
        className="
        text-zinc-500
        mb-8
        "
      >

        Your listening patterns
        and mood journey

      </p>

      <ActivityFeed

        refreshKey={
          activityRevision
        }

      />

      <MoodJourney />

      <MoodInsights />

      <WeeklyMoodReport />

    </main>

  )

}