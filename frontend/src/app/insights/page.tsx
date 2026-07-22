"use client"

import { useState } from "react"

import ActivityFeed from "@/components/ActivityFeed"
import MoodJourney from "@/components/MoodJourney"
import MoodInsights from "@/components/MoodInsights"
import WeeklyMoodReport from "@/components/WeeklyMoodReport"
import AppScreen from "@/components/AppScreen"

export default function InsightsPage() {

  const [activityRevision] =

    useState(0)

  return (

    <AppScreen>

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

    </AppScreen>

  )

}