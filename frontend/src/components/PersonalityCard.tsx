"use client"

import { motion } from "framer-motion"

type Props = {

  message: string

}

export default function PersonalityCard({

  message

}: Props) {

  if (!message) {

    return null

  }

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 15
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      className="
      mt-6
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-4
      "
    >

      <p
        className="
        text-sm
        text-zinc-300
        "
      >

        ✨ {message}

      </p>

    </motion.div>

  )

}