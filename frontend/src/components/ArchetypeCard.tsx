"use client"

import { motion } from "framer-motion"

type Props = {

  title: string

  emoji: string

  description: string

}

export default function ArchetypeCard({

  title,

  emoji,

  description

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
      mt-6
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-5
      "
    >

      <div
        className="
        flex
        items-center
        gap-3
        mb-3
        "
      >

        <span className="text-3xl">

          {emoji}

        </span>

        <div>

          <h3
            className="
            font-semibold
            text-lg
            "
          >

            {title}

          </h3>

          <p
            className="
            text-xs
            text-zinc-500
            "
          >

            Listening Archetype

          </p>

        </div>

      </div>

      <p
        className="
        text-sm
        text-zinc-300
        "
      >

        {description}

      </p>

    </motion.div>

  )

}