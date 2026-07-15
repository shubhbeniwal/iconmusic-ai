export default function Logo() {
  return (

    <div className="flex items-center gap-3">

      <div
        className="
        h-12
        w-12
        rounded-2xl
        bg-gradient-to-br
        from-emerald-500/20
        to-emerald-700/20
        flex
        items-center
        justify-center
        border
        border-zinc-800
        shadow-[0_0_30px_rgba(16,185,129,0.25)]
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