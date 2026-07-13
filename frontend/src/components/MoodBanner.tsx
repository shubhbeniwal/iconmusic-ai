type Props = {

  mood: string

}

export default function MoodBanner({

  mood

}: Props) {

  const emojiMap: Record<string,string> = {

    happy: "😊",

    motivated: "🔥",

    heartbroken: "💔",

    exhausted: "😴",

    nostalgic: "🌙",

    emotional: "💙"

  }

  return (

    <div
      className="
      mt-6
      bg-zinc-900/90
      border
      border-zinc-800
      rounded-2xl
      p-4
      "
    >

      <p
        className="
        text-xs
        uppercase
        tracking-wider
        text-zinc-500
        "
      >
        Detected Mood
      </p>

      <div
        className="
        flex
        items-center
        gap-3
        mt-2
        "
      >

        <span className="text-2xl">
          {emojiMap[mood] || "🎵"}
        </span>

        <span
          className="
          text-lg
          font-semibold
          capitalize
          "
        >
          {mood}
        </span>

      </div>

    </div>

  )

}