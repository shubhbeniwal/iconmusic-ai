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
      bg-zinc-900/90
      shadow-2xl
      rounded-3xl
      overflow-hidden
      border
      border-zinc-800
      "
    >

      <div className="relative">

        <img
            src={image}
            alt={title}
            className="
            h-56
            w-full
            object-cover
            "
        />

        <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-transparent
            to-transparent
            "
        />

        <div
            className="
            absolute
            bottom-4
            left-4
            "
        >

            <div
            className="
            text-xs
            uppercase
            tracking-widest
            text-zinc-300
            "
            >
            Recommended For You
            </div>

            <div
            className="
            text-3xl
            font-bold
            "
            >
            {title}
            </div>

            <div
            className="
            text-zinc-300
            "
            >
            {artist}
            </div>

        </div>

        </div>

      <div className="p-5">

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