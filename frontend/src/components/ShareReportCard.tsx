"use client"

type Props = {

  archetype: string

  dominantMood: string

  sessions: number

  favorites: number

}

const archetypeDescriptions: Record<string, string> = {

    Explorer:
      "You love discovering different moods and genres instead of staying in one lane.",
  
    Motivator:
      "You use music as fuel to stay focused, energized and productive.",
  
    Dreamer:
      "You gravitate toward emotional, reflective and atmospheric music.",
  
    Optimist:
      "Your listening habits lean toward positivity, growth and uplifting vibes.",
  
    Healer:
      "You often turn to music for comfort, reflection and emotional balance.",
  
    "Night Owl":
      "Late-night listening and nostalgic moods define your music journey."
  
  }

  const moodEmojiMap: Record<string, string> = {

    motivated: "⚡",
  
    hopeful: "✨",
  
    healing: "❤️",
  
    heartbreak: "💔",
  
    nostalgic: "🌙",
  
    emotional: "🎭",
  
    chill: "🌊"
  
  }
  
export default function ShareReportCard({

  archetype,

  dominantMood,

  sessions,

  favorites

}: Props) {

  return (

    <div

      id="share-report"

      className="
      rounded-3xl
      p-8
      bg-gradient-to-br
      from-purple-600
      via-pink-500
      to-orange-400
      text-white
      shadow-2xl
      mt-6
      "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-6
        "
      >
        🎵 My IconMusic Report
      </h2>

      <div className="space-y-4">

      <div className="mb-6">

        <div className="text-3xl font-bold">

        {archetype}

        </div>

        <p className="text-white/90 mt-2">

        {

            archetypeDescriptions[
            archetype
            ] ||

            "Your listening style is uniquely yours."

        }

        </p>

        </div>


        <div className="mt-6">

            <p
                className="
                text-sm
                text-white/80
                mb-2
                "
            >

                Dominant Mood

            </p>

            <div
                className="
                text-xl
                font-semibold
                "
            >

                {

                moodEmojiMap[
                    dominantMood.toLowerCase()
                ] || "🎵"

                }

                {" "}

                {dominantMood}

            </div>

        </div>


        <div
            className="
            grid
            grid-cols-2
            gap-4
            mt-6
            "
            >

            <div
                className="
                bg-white/10
                rounded-2xl
                p-4
                text-center
                "
            >

                <div className="text-3xl font-bold">

                {sessions}

                </div>

                <div className="text-sm">

                Sessions

                </div>

            </div>

            <div
                className="
                bg-white/10
                rounded-2xl
                p-4
                text-center
                "
            >

                <div className="text-3xl font-bold">

                {favorites}

                </div>

                <div className="text-sm">

                Saved Songs

            </div>

            </div>

            <div
                className="
                mt-8
                pt-4
                border-t
                border-white/20
                text-center
                text-sm
                text-white/80
                "
                >

                Powered by IconMusic AI 🎵

            </div>

            </div>

      </div>

    </div>

  )

}