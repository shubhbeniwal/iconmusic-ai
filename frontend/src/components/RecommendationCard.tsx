import {

  getMoodGradient

}

from "@/lib/moodGradients"

import {

  getArtistAvatar

}

from "@/lib/artistAvatar"

import {

  getMoodIcon

}

from "@/lib/moodIcons"

type Props = {

  title: string

  artist: string

  reasons: string[]

  image?: string

  match: number

  moods: string[]

}

export default function RecommendationCard({

  title,

  artist,

  reasons,

  image,

  match,

  moods

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

        {

          image ? (

            <img

              src={image}

              alt={title}

              className="
              h-52
              w-full
              object-cover
              "

            />

          ) : (

            <div

              className={`
              h-52
              w-full
              bg-gradient-to-br
              ${getMoodGradient(moods)}
              flex
              items-center
              justify-center
              text-5xl
              font-bold
              `}

            >

              ♠

            </div>

          )

        }

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
              flex
              items-center
              gap-3
              "
            >

              <div
                className="
                h-12
                w-12
                rounded-full
                bg-zinc-800
                border
                border-zinc-700
                flex
                items-center
                justify-center
                text-xl
                "
              >

                {

                  getArtistAvatar(

                    artist

                  )

                }

              </div>

              <div>

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
                  text-sm
                  "
                >
                  {artist}
                </p>

              </div>

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

            <div

              className="
              flex
              flex-wrap
              gap-2
              mt-3
              "

            >

              {

                reasons.map(

                  (

                    reason,

                    index

                  ) => (

                    <div

                      key={index}

                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-zinc-800
                      border
                      border-zinc-700
                      text-xs
                      text-zinc-300
                      flex
                      items-center
                      gap-2
                      "

                    >

                      <span>

                        {

                          getMoodIcon(

                            reason

                          )

                        }

                      </span>

                      {reason}

                    </div>

                  )

                )

              }

            </div>

         </div>

        </div>

      </div>

  )

}