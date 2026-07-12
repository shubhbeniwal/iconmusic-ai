type Props = {

  title: string

  artist: string

  reasons: string[]

}

export default function RecommendationCard({

  title,

  artist,

  reasons

}: Props) {

  return (

    <div
      className="
      bg-zinc-900
      shadow-2xl
      rounded-3xl
      overflow-hidden
      border
      border-zinc-800
      "
    >

      <div
        className="
        h-32
        bg-gradient-to-br
        from-zinc-700
        to-zinc-900
        "
      />

      <div className="p-5">

        <h3
          className="
          text-xl
          font-bold
          "
        >
          {title}
        </h3>

        <p
          className="
          text-zinc-400
          mt-1
          "
        >
          {artist}
        </p>

        <div className="mt-4">

          <p
            className="
            text-sm
            text-zinc-500
            mb-2
            "
          >
            Chosen for you
          </p>

          {

            reasons.map(

              (
                reason,
                index
              ) => (

                <div
                  key={index}
                  className="
                  text-sm
                  mb-1
                  "
                >
                  ✓ {reason}
                </div>

              )

            )

          }

        </div>

      </div>

    </div>

  )

}