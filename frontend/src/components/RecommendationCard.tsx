type Props = {

  title: string
  artist: string
  reasons: string[]
  image: string
  match: number

}

export default function RecommendationCard({

  title,

  artist,

  reasons,

  image,

  match

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

      <img
        src={image}
        alt={title}
        className="
        h-52
        w-full
        object-cover
        "
        />

      <div className="p-5">

        <h3
            className="
            text-2xl
            font-bold
            tracking-tight
            "
        >
          {title}
        </h3>

        <p
            className="
            text-zinc-500
            mt-1
            text-sm
            "
        >
          {artist}
        </p>

        <div
        className="
        mt-3
        inline-flex
        rounded-full
        bg-green-500/15
        text-green-400
        text-xs
        px-3
        py-1
        "
        >
        {match}% Match
        </div>


          <div className="flex flex-wrap gap-2 mt-3">

            {reasons.map(

                (reason, index) => (

                <div

                    key={index}

                    className="
                    px-3
                    py-1
                    rounded-full
                    bg-zinc-800
                    text-xs
                    text-zinc-300
                    "

                >

                    {reason}

                </div>

                )

            )}

         </div>

        </div>

      </div>

  )

}