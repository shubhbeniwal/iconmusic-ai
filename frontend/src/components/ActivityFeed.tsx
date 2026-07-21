"use client"

import {

  useEffect,
  useState

} from "react"

import {

  getActivity,
  ActivityItem

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