"use client"

import { motion } from "framer-motion"

type Props = {

  report: {

    totalSessions: number

    dominantMood: string

    favoriteSongs: number

    activityCount: number

    archetype: string

    trend: string

  }

}

export default function ListeningReportCard({

  report

}: Props) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      mt-6
      "
    >

      <h2
        className="
        text-xl
        font-bold
        mb-4
        "
      >

        🎵 Listening Report

      </h2>

      <div className="space-y-3">

        <p>

          Sessions:
          {" "}
          <strong>

            {report.totalSessions}

          </strong>

        </p>

        <p>

          Dominant Mood:
          {" "}
          <strong>

            {report.dominantMood}

          </strong>

        </p>

        <p>

          Archetype:
          {" "}
          <strong>

            {report.archetype}

          </strong>

        </p>

        <p>

          Saved Songs:
          {" "}
          <strong>

            {report.favoriteSongs}

          </strong>

        </p>

        <p>

          Activity Entries:
          {" "}
          <strong>

            {report.activityCount}

          </strong>

        </p>

        <p>

          Trend:
          {" "}
          <strong>

            {report.trend}

          </strong>

        </p>

      </div>

    </motion.div>

  )

}