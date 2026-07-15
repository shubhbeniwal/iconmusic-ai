"use client"

type Props = {
  open: boolean
  onClose: () => void
  song: any
}

export default function PlayerModal({
  open,
  onClose,
  song
}: Props) {

  if (!open || !song) return null

  return (

    <div
      className="
      fixed
      inset-0
      z-50
      bg-black/80
      backdrop-blur-xl
      flex
      items-center
      justify-center
      p-6
      "
    >

      <div
        className="
        w-full
        max-w-md
        bg-zinc-900
        rounded-3xl
        overflow-hidden
        border
        border-zinc-800
        "
      >

        <img
          src={song.image}
          alt={song.title}
          className="
          h-80
          w-full
          object-cover
          "
        />

        <div className="p-6">

          <h2 className="text-3xl font-bold">
            {song.title}
          </h2>

          <p className="text-zinc-400 mt-2">
            {song.artist}
          </p>

          <div className="mt-6">

            <div
              className="
              h-2
              bg-zinc-800
              rounded-full
              overflow-hidden
              "
            >
              <div
                className="
                h-full
                w-1/3
                bg-green-500
                "
              />
            </div>

          </div>

          <div
            className="
            mt-6
            flex
            justify-center
            gap-6
            text-3xl
            "
          >
            <button>⏮</button>
            <button>▶</button>
            <button>⏭</button>
          </div>

          <button
            onClick={onClose}
            className="
            mt-8
            w-full
            bg-zinc-800
            py-3
            rounded-xl
            "
          >
            Close
          </button>

        </div>

      </div>

    </div>

  )
}