type Props = {

  lastQuery: string

  onContinue: () => void

}

export default function ContinueSessionCard({

  lastQuery,

  onContinue

}: Props) {

  return (

    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-5
      mb-6
      "
    >

      <p
        className="
        text-zinc-500
        text-sm
        "
      >
        Continue Previous Session
      </p>

      <h3
        className="
        mt-2
        font-semibold
        "
      >
        {lastQuery}
      </h3>

      <button

        onClick={onContinue}

        className="
        mt-4
        text-green-400
        text-sm
        font-medium
        "
      >

        Continue →

      </button>

    </div>

  )

}