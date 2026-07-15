import { motion } from "framer-motion"

type Props = {

  moodText: string

  setMoodText: (
    value: string
  ) => void

  onDiscover: () => void

  loading: boolean

}

export default function MoodInputCard({

  moodText,

  setMoodText,

  onDiscover,

  loading

}: Props) {

  return (

    <div
      className="
      bg-white/5
      backdrop-blur-xl
      rounded-3xl
      p-6
      border
      border-white/10
      shadow-[0_0_40px_rgba(255,255,255,0.03)]
      "
    >

      <h2 className="text-xl font-semibold">
        How are you feeling today?
      </h2>

      <textarea
        value={moodText}
        onChange={(e) =>
          setMoodText(
            e.target.value
          )
        }
        className="
        mt-4
        w-full
        rounded-xl
        bg-zinc-800
        p-4
        text-white
        resize-none
        "
        rows={4}
        placeholder="Need motivation for gym..."
      />

      <motion.button

        whileHover={{
          scale: 1.01
        }}

        whileTap={{
          scale: 0.97
        }}

        transition={{
          duration: 0.15
        }}
        onClick={onDiscover}
        disabled={loading}
        className="
        mt-4
        w-full
        rounded-xl
        bg-gradient-to-r
        from-emerald-400
        to-green-500
        text-black
        py-3
        font-semibold
        transition-all
        duration-300
        hover:scale-[1.02]
        shadow-[0_0_25px_rgba(34,197,94,0.35)]
        "
      >
        {

          loading

            ? "Discovering..."

            : "Discover Music"

        }
      </motion.button>

    </div>

  )

}