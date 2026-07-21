"use client"

import { useState, useEffect } from "react"

import { getMusicRecommendations } from "@/lib/api"
import { continueSession } from "@/lib/api"

import { getArtwork } from "@/lib/artwork"

import { getMoodTheme } from "@/lib/moodTheme"

import { motion } from "framer-motion"

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
import PlayerModal from "@/components/PlayerModal"
import FavoriteButton from "@/components/FavoriteButton"
import FavoritesSection from "@/components/FavoritesSection"
import {addActivity, getActivity} from "@/lib/activity"
import {addMoodHistory} from "@/lib/moodHistory"
import ActivityFeed from "@/components/ActivityFeed"

export default function Home() {

  const [memoryData, setMemoryData] = useState<any>(null)

  const [moodText, setMoodText] = useState("")

  const [loading, setLoading] = useState(false)

  const [result, setResult] = useState<any>(null)

  const [activityRevision, setActivityRevision] = useState(0)

  const [selectedSong, setSelectedSong] = useState<any>(null)

  const [playerOpen, setPlayerOpen] = useState(false)

  const [favoritesRevision, setFavoritesRevision] =
    useState(0)

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

      addMoodHistory(

        data.detected_mood
      
      )
  
      addActivity({
  
        id: crypto.randomUUID(),
  
        type: "mood",
  
        title:
          `Mood: ${data.detected_mood}`,
  
        timestamp: Date.now()
  
      })
  
      if (
  
        data.recommendations?.[0]
  
      ) {
  
        addActivity({
  
          id: crypto.randomUUID(),
  
          type: "song",
  
          title:
            data.recommendations[0]
              .song.title,
  
          timestamp: Date.now()
  
        })
  
      }
  
      setActivityRevision(
  
        prev => prev + 1
  
      )
  
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

        <FavoritesSection

          refreshKey={favoritesRevision}

        />

        <ActivityFeed

        refreshKey={
          activityRevision
        }

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
                

                {
                  result && result.recommendations?.[0] && (

                    <motion.div

                      initial={{
                        opacity: 0,
                        y: 20
                      }}

                      animate={{
                        opacity: 1,
                        y: 0
                      }}

                      transition={{
                        duration: 0.4
                      }}

                    >
                      <div
                          className="relative"
                          onClick={() => {

                            setSelectedSong({

                              title:
                              result.recommendations[0].song.title,

                              artist:
                              result.recommendations[0].song.artist,

                              image:
                              getArtwork(
                                result.recommendations[0].song.title
                              )

                            })

                            setPlayerOpen(true)

                          }}
                        >

                        <div
                          className="
                          absolute
                          top-4
                          right-4
                          z-10
                          "
                        >

                          <FavoriteButton

                            title={
                              topRecommendation.song.title
                            }

                            song={{

                              title:
                              topRecommendation.song.title,

                              artist:
                              topRecommendation.song.artist,

                              image:
                              getArtwork(
                                topRecommendation.song.title
                              ),

                              song:
                              topRecommendation.song

                            }}

                            onChange={() =>

                              setFavoritesRevision(
                                (value) => value + 1
                              )

                            }

                          />

                        </div>

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
                      </div>
                    </motion.div>

                  )
                }  





                {/* AI Insight */}

                {
                result && (

                  <motion.div

                    initial={{
                      opacity: 0,
                      y: 20
                    }}

                    animate={{
                      opacity: 1,
                      y: 0
                    }}

                    transition={{
                      delay: 0.15,
                      duration: 0.4
                    }}

                  >

                  <AIInsightPanel

                    message={
                      result.coach_message
                    }

                  />


                  </motion.div>

                  )
                }







                {/* More Matches */}

                {
                  result && (

                    <motion.div

                      initial={{
                        opacity: 0,
                        y: 20
                      }}

                      animate={{
                        opacity: 1,
                        y: 0
                      }}

                      transition={{
                        delay: 0.3,
                        duration: 0.4
                      }}

                    >

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

                                <div
                                  key={index}
                                  className="relative"
                                >

                                  <div
                                    className="
                                    absolute
                                    top-2
                                    right-2
                                    z-10
                                    "
                                  >

                                    <FavoriteButton

                                      title={
                                        item.song.title
                                      }

                                      song={{

                                        title:
                                        item.song.title,

                                        artist:
                                        item.song.artist,

                                        image:
                                        getArtwork(
                                          item.song.title
                                        ),

                                        song:
                                        item.song

                                      }}

                                      onChange={() =>

                                        setFavoritesRevision(
                                          (value) => value + 1
                                        )

                                      }

                                    />

                                  </div>

                                  <MiniRecommendationCard

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

                                </div>

                              )

                            )

                        }

                        </div>
                      </motion.div>
                      )
                    }
              </>

            )

          }

        </div>

      </div>
      <PlayerModal

        open={playerOpen}

        song={selectedSong}

        onClose={() =>

          setPlayerOpen(false)

        }

      />
      <BottomNav />

    </main>

  )

}