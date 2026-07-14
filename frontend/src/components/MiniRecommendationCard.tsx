import { motion } from "framer-motion"

type Props = {

  title: string
  artist: string
  image: string
  match: number

}

export default function MiniRecommendationCard({

  title,
  artist,
  image,
  match

}: Props) {

  return (

    <motion.div
      whileHover={{
        y: -4,
        scale: 1.03
      }}
      whileTap={{
        scale: 0.98
      }}
      transition={{
        duration: 0.2
      }}
      className="
      min-w-[180px]
      bg-zinc-900/90
      rounded-2xl
      overflow-hidden
      border
      border-zinc-800
      transition-all
      duration-300
      hover:border-zinc-600
      "
    >

      <img
        src={image}
        alt={title}
        className="
        h-28
        w-full
        object-cover
        "
      />

      <div className="p-3">

        <p
          className="
          font-semibold
          text-sm
          "
        >
          {title}
        </p>

        <p
          className="
          text-zinc-500
          text-xs
          mt-1
          "
        >
          {artist}
        </p>

      </div>

      <div
        className="
        mt-2
        text-green-400
        text-xs
        "
      >
        {match}% Match
      </div>

    </motion.div>

  )

}