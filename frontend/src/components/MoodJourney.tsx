"use client"

import { useEffect, useState } from "react"

import {

  getMoodHistory

} from "@/lib/moodHistory"

type MoodEntry = {

  id: string

  mood: string

  timestamp: number

}

const moodEmoji: Record<string,string> = {

  healing: "❤️",

  hopeful: "✨",

  motivational: "⚡",

  heartbreak: "💔",

  lateNight: "🌙"

}

function formatDate(

    timestamp: number
  
  ) {
  
    const date = new Date(timestamp)
  
    const today = new Date()
  
    const yesterday = new Date()
  
    yesterday.setDate(
  
      today.getDate() - 1
  
    )
  
    if (
  
      date.toDateString() ===
  
      today.toDateString()
  
    ) {
  
      return "Today"
  
    }
  
    if (
  
      date.toDateString() ===
  
      yesterday.toDateString()
  
    ) {
  
      return "Yesterday"
  
    }
  
    return date.toLocaleDateString(
  
      "en-US",
  
      {
  
        month: "short",
  
        day: "numeric"
  
      }
  
    )
  
  }

export default function MoodJourney() {

  const [history,setHistory] =

    useState<MoodEntry[]>([])

  useEffect(() => {

    setHistory(

      getMoodHistory()

    )

  }, [])

  if (history.length === 0) {

    return null

  }

  return (

    <div className="mt-8">

      <h2
        className="
        text-lg
        font-semibold
        mb-4
        "
      >

        Your Mood Journey

      </h2>

      <div
        className="
        space-y-3
        "
      >

        {

            history.map(

                (item,index) => (
            
                <div
            
                    key={item.id}
            
                    className="
            
                    flex
            
                    gap-4
            
                    "
            
                >
            
                    <div
            
                    className="
            
                    flex
            
                    flex-col
            
                    items-center
            
                    "
            
                    >
            
                    <div
            
                        className="
            
                        h-3
            
                        w-3
            
                        rounded-full
            
                        bg-emerald-400
            
                        "
            
                    />
            
                    {
            
                        index !==
            
                        history.length - 1 && (
            
                        <div
            
                            className="
            
                            w-[2px]
            
                            flex-1
            
                            bg-zinc-700
            
                            min-h-[40px]
            
                            "
            
                        />
            
                        )
            
                    }
            
                    </div>
            
                    <div
            
                    className="
            
                    bg-zinc-900/80
            
                    border
            
                    border-zinc-800
            
                    rounded-2xl
            
                    px-4
            
                    py-3
            
                    flex-1
            
                    "
            
                    >
            
                    <p
            
                        className="
            
                        text-xs
            
                        text-zinc-500
            
                        mb-1
            
                        "
            
                    >
            
                        {
            
                        formatDate(
            
                            item.timestamp
            
                        )
            
                        }
            
                    </p>
            
                    <p>
            
                        {
            
                        moodEmoji[item.mood]
            
                        ||
            
                        "🎵"
            
                        }
            
                        {" "}
            
                        {item.mood}
            
                    </p>
            
                    </div>
            
                </div>
            
                )
            
            )

        }

      </div>

    </div>

  )

}