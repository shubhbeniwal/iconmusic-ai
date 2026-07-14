"use client"

import { useState, useEffect } from "react"

import { getMusicRecommendations } from "@/lib/api"
import { continueSession } from "@/lib/api"

import { getArtwork } from "@/lib/artwork"

import { getMoodTheme } from "@/lib/moodTheme"

import Logo from "@/components/Logo"
import HeroSection from "@/components/HeroSection"
import MoodInputCard from "@/components/MoodInputCard"
import RecommendationCard from "@/components/RecommendationCard"
import AIInsightPanel from "@/components/AIInsightPanel"
import BottomNav from "@/components/BottomNav"
import SectionTitle from "@/components/SectionTitle"
import MiniRecommendationCard from "@/components/MiniRecommendationCard"
import ContinueSessionCard from "@/components/ContinueSessionCard"
import MoodBanner from "@/components/MoodBanner"
import EmptyState from "@/components/EmptyState"
import SkeletonRecommendation from "@/components/SkeletonRecommendation"
import SkeletonMiniCard from "@/components/SkeletonMiniCard"

export default function Home() {

  const [memoryData, setMemoryData] = useState<any>(null)

  const [moodText, setMoodText] = useState("")

  const [loading, setLoading] = useState(false)

  const [result, setResult] = useState<any>(null)

  useEffect(() => {

    const loadSession = async () => {

      try {

        const data = await continueSession()

        setMemoryData(data)

      }

      catch {

        console.log(
          "No previous session"
        )

      }

    }

    loadSession()

  }, [])

  const handleContinue = async () => {

    try {

      const data = await continueSession()

      setResult(data)

    }

    catch (error) {

      console.error(error)

    }

  }

  const handleDiscover = async () => {

    if (!moodText.trim()) return

    setLoading(true)

    try {

      const data = await getMusicRecommendations(
        moodText
      )

      setResult(data)

    }

    catch (error) {

      console.error(error)

    }

    finally {

      setLoading(false)

    }

  }

  const topRecommendation =
    result?.recommendations?.[0]

  const theme = getMoodTheme(
    result?.detected_mood
  )

  return (

    <main
      className="
      relative
      min-h-screen
      pt-8
      text-white
      pb-32
      overflow-hidden
      bg-black
      "
    >

      {/* Background Orbs */}

      <div
        className={`
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          h-[500px]
          w-[500px]
          rounded-full
          ${theme.primary}
          blur-[140px]
          pointer-events-none
        `}
      />

      <div
        className={`
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        h-[500px]
        w-[500px]
        rounded-full
        ${theme.secondary}
        blur-[140px]
        pointer-events-none
        `}
      />

      <div
        className={`
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        h-[500px]
        w-[500px]
        rounded-full
        ${theme.tertiary}
        blur-[140px]
        pointer-events-none
        `}
      />

      <div className="max-w-md mx-auto px-6 pt-10">

        {/* Header */}

        <div className="mb-10">

          <Logo />

          <HeroSection />

        </div>

        {/* Continue Session */}

        {

          memoryData && (

            <ContinueSessionCard

              lastQuery={
                memoryData.based_on
              }

              onContinue={
                handleContinue
              }

            />

          )

        }

        {/* Mood Input */}

        <MoodInputCard

          moodText={moodText}

          setMoodText={setMoodText}

          loading={loading}

          onDiscover={handleDiscover}

        />

        {/* Mood Banner */}

        {

          result && (

            <MoodBanner

              mood={
                result.detected_mood
              }

            />

          )

        }

        <div className="mt-6">

          {

            loading ? (

              <>

                <SkeletonRecommendation />

                <div className="mt-6">

                  <SkeletonRecommendation />

                </div>

                <div
                  className="
                  flex
                  gap-4
                  mt-6
                  overflow-x-auto
                  "
                >

                  <SkeletonMiniCard />
                  <SkeletonMiniCard />
                  <SkeletonMiniCard />

                </div>

              </>

            ) : !result ? (

              <EmptyState />

            ) : (

              <>

                {/* Today's Match */}

                <SectionTitle

                  title="Today's Match"

                  subtitle="Picked by Icon AI"

                />

                <RecommendationCard

                  title={
                    topRecommendation.song.title
                  }

                  artist={
                    topRecommendation.song.artist
                  }

                  image={
                    getArtwork(
                      topRecommendation.song.title
                    )
                  }

                  match={
                    Math.round(
                      topRecommendation.score * 100
                    )
                  }

                  reasons={
                    topRecommendation.why
                  }

                  moods={
                    topRecommendation.song.moods
                  }

                  genre={
                    topRecommendation.song.genre
                  }

                  energy={
                    topRecommendation.song.energy
                  }

                />

                {/* AI Insight */}

                <AIInsightPanel

                  message={
                    result.coach_message
                  }

                />

                {/* More Matches */}

                <SectionTitle

                  title="More Matches"

                  subtitle="Based on your music taste"

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

                    result.recommendations

                      .slice(1)

                      .map(

                        (
                          item: any,
                          index: number
                        ) => (

                          <MiniRecommendationCard

                            key={index}

                            title={
                              item.song.title
                            }

                            artist={
                              item.song.artist
                            }

                            image={
                              getArtwork(
                                item.song.title
                              )
                            }

                            match={
                              Math.round(
                                item.score * 100
                              )
                            }

                          />

                        )

                      )

                  }

                </div>

              </>

            )

          }

        </div>

      </div>

      <BottomNav />

    </main>

  )

}