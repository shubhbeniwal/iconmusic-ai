"use client"

import { useEffect, useState } from "react"

import ActivityFeed from "@/components/ActivityFeed"
import MoodJourney from "@/components/MoodJourney"
import MoodInsights from "@/components/MoodInsights"
import WeeklyMoodReport from "@/components/WeeklyMoodReport"
import AppScreen from "@/components/AppScreen"
import ArchetypeCard from "@/components/ArchetypeCard"
import {
  getArchetype
} from "@/lib/archetype"
import ListeningReportCard
from "@/components/ListeningReportCard"

import {
  generateListeningReport
}
from "@/lib/listeningReport"

import ShareReportCard
from "@/components/ShareReportCard"

import ExportReportButton
from "@/components/ExportReportButton"


export default function InsightsPage() {

    const [activityRevision] =
    useState(0)

    const [report, setReport] =
    useState<any>(null)

    const [archetype, setArchetype] =
    useState<any>(null)

    useEffect(() => {

    setReport(
        generateListeningReport()
    )

    setArchetype(
        getArchetype()
    )

    }, [])


    if (!report || !archetype) {

        return null
        
    }

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

        <ListeningReportCard

        report={report}

        />

        <ShareReportCard

        archetype={report.archetype}

        dominantMood={report.dominantMood}

        sessions={report.totalSessions}

        favorites={report.favoriteSongs}

        />

        <ExportReportButton />

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