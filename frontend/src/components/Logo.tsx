export default function Logo() {
  return (

    <div className="flex items-center gap-3">

      <div
        className="
        h-12
        w-12
        rounded-2xl
        bg-zinc-900
        flex
        items-center
        justify-center
        border
        border-zinc-800
        "
      >
        <span className="text-2xl">
          ♠
        </span>
      </div>

      <div>

        <h1 className="font-bold text-xl">
          IconMusic AI
        </h1>

        <p className="text-xs text-zinc-500">
          Personal AI Music Companion
        </p>

      </div>

    </div>

  )
}