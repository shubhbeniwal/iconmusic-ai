"use client"

import { useState } from "react"

import ActivityFeed from "@/components/ActivityFeed"
import MoodJourney from "@/components/MoodJourney"
import MoodInsights from "@/components/MoodInsights"
import WeeklyMoodReport from "@/components/WeeklyMoodReport"
import AppScreen from "@/components/AppScreen"
import ArchetypeCard from "@/components/ArchetypeCard"
import {
  getArchetype
} from "@/lib/archetype"


export default function InsightsPage() {

  const [activityRevision] =

    useState(0)


    const archetype = getArchetype()

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

      <ArchetypeCard
        title={archetype.title}
        emoji={archetype.emoji}
        description={archetype.description}
      />  

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