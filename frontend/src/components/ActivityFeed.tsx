"use client"

import {

  useEffect,
  useState

} from "react"

import {

  getActivity,
  ActivityItem,
  clearActivity

} from "@/lib/activity"

export default function ActivityFeed({

  refreshKey

}: {

  refreshKey: number

}) {

  const [

    activity,

    setActivity

  ] = useState<ActivityItem[]>([])

  const handleClearActivity = () => {

    const confirmed = window.confirm(
  
      "Clear activity history?"
  
    )
  
    if (!confirmed) {
  
      return
  
    }
  
    clearActivity()
  
    setActivity([])
  
  }

  useEffect(() => {

    setActivity(
      getActivity()
    )

  }, [refreshKey])

  if (

    activity.length === 0

  ) {

    return null

  }

  return (

    <div
      className="
      mt-8
      bg-zinc-900/90
      rounded-3xl
      border
      border-zinc-800
      p-5
      "
    >

      <h2
        className="
        text-lg
        font-semibold
        mb-4
        "
      >
        Recent Activity
      </h2>

      <div className="flex justify-end mb-4">

        <button

          onClick={handleClearActivity}

          className="
          text-xs
          px-3
          py-2
          rounded-xl
          border
          border-red-500/30
          text-red-400
          bg-red-500/10
          hover:bg-red-500/20
          transition
          "

        >

          Clear Activity

        </button>

      </div>

      <div className="space-y-3">

        {

          activity.map(

            (item) => (

              <div

                key={item.id}

                className="
                text-sm
                text-zinc-300
                "

              >

                {

                  item.type ===
                  "song"

                    ? "🎵"

                    : "💙"

                }

                {" "}
                {item.title}

              </div>

            )

          )

        }

      </div>

    </div>

  )

}