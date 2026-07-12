export default function AIInsightPanel() {
  return (

    <div
      className="
      mt-4
      bg-zinc-900
      border
      border-zinc-800
      rounded-3xl
      p-5
      "
    >

      <div className="flex items-center gap-2">

        <div
          className="
          h-8
          w-8
          rounded-full
          bg-green-500/15
          flex
          items-center
          justify-center
          text-green-400
          "
        >
          ✦
        </div>

        <h3
          className="
          font-semibold
          text-lg
          "
        >
          AI Insight
        </h3>

      </div>

      <p
        className="
        mt-4
        text-zinc-300
        leading-relaxed
        "
      >
        You're feeling emotionally exhausted.
        Based on your listening history,
        Coldplay often helps you during
        reflective moments.

        Fix You combines healing,
        hopefulness and familiarity,
        making it a strong match right now.
      </p>

    </div>

  )
}