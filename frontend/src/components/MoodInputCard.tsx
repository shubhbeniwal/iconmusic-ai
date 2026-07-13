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
      bg-zinc-900/90
      rounded-3xl
      p-6
      border
      border-zinc-800
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

      <button
        onClick={onDiscover}
        disabled={loading}
        className="
        mt-4
        w-full
        rounded-xl
        bg-gradient-to-r
        from-white
        to-zinc-200
        text-black
        py-3
        font-semibold
        transition-all
        duration-300
        hover:scale-[1.02]
        "
      >
        {

          loading

            ? "Discovering..."

            : "Discover Music"

        }
      </button>

    </div>

  )

}