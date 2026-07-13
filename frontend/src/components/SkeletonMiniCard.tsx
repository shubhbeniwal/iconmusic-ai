export default function SkeletonMiniCard() {

  return (

    <div
      className="
      min-w-[180px]
      animate-pulse
      rounded-2xl
      overflow-hidden
      border
      border-zinc-800
      bg-zinc-900
      "
    >

      <div
        className="
        h-28
        bg-zinc-800
        "
      />

      <div className="p-3">

        <div
          className="
          h-4
          w-24
          rounded
          bg-zinc-800
          "
        />

        <div
          className="
          mt-2
          h-3
          w-16
          rounded
          bg-zinc-800
          "
        />

      </div>

    </div>

  )

}