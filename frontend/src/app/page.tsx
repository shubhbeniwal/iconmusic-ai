"use client"

import { useState, useEffect }

from "react"

import { getMusicRecommendations }

from "@/lib/api"

import ContinueSessionCard

from "@/components/ContinueSessionCard"

import { continueSession }

from "@/lib/api"

import {

  getArtwork

}

from "@/lib/artwork"

import Logo from "@/components/Logo"

import HeroSection from "@/components/HeroSection"

import MoodInputCard from "@/components/MoodInputCard"

import RecommendationCard from "@/components/RecommendationCard"

import AIInsightPanel from "@/components/AIInsightPanel"

import BottomNav from "@/components/BottomNav"

import SectionTitle from "@/components/SectionTitle"

import MiniRecommendationCard from "@/components/MiniRecommendationCard"


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

  const recommendation =

  result?.recommendations?.[0]

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

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        h-[500px]
        w-[500px]
        rounded-full
        bg-emerald-500/20
        blur-[140px]
        pointer-events-none
        "
      />

      <div
        className="
        absolute
        top-40
        right-[-100px]
        h-72
        w-72
        rounded-full
        bg-purple-500/10
        blur-[120px]
        pointer-events-none
        "
      />

      <div
        className="
        absolute
        bottom-40
        left-[-100px]
        h-80
        w-80
        rounded-full
        bg-cyan-500/10
        blur-[140px]
        pointer-events-none
        "
      />

      <div
        className="
        absolute
        top-[700px]
        right-[-60px]
        h-60
        w-60
        rounded-full
        bg-green-500/10
        blur-[120px]
        pointer-events-none
        "
      />

      <div className="max-w-md mx-auto px-6 pt-10">

        <div className="mb-10">
          <Logo />
          <HeroSection />
        </div>



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


        <MoodInputCard

          moodText={moodText}

          setMoodText={setMoodText}

          loading={loading}

          onDiscover={handleDiscover}

        />

      <div className="mt-6">
        <SectionTitle

          title="Today's Match"

          subtitle="Picked by Icon AI"

        />

        {

          recommendation && (

            <RecommendationCard

              title="Fix You"

              artist="Coldplay"

              match={92}

              moods={[

                "healing",

                "hopeful"

              ]}

              reasons={[

                "Healing",

                "Hopeful",

                "You like Coldplay"

              ]}

            />

          )

        }

        {

          result && (

            <AIInsightPanel

              message={
                result.coach_message
              }

            />

          )

        }

        {

          result && (

            <SectionTitle

              title="More Matches"

              subtitle="Based on your music taste"

            />

          )

        }



        {

          result && (

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

                      />

                    )

                  )

              }

            </div>

          )

        }






      </div>

      </div>

    <BottomNav />
      
    </main>

  )

}