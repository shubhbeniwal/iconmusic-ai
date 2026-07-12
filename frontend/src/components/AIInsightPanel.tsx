export default function AIInsightPanel() {
  return (

    <div
        className="
        mt-4
        bg-zinc-900/90
        border
        border-zinc-800
        rounded-3xl
        p-5
        "
        >

        <div className="flex items-start gap-4">

            <div
            className="
            h-12
            w-12
            rounded-full
            bg-gradient-to-br
            from-green-400
            to-emerald-600
            flex
            items-center
            justify-center
            shrink-0
            "
            >
            ✦
            </div>

            <div>

            <p
                className="
                text-sm
                text-green-400
                font-medium
                "
            >
                Icon AI
            </p>

            <p
                className="
                text-zinc-300
                leading-relaxed
                mt-2
                "
            >
                You're feeling emotionally exhausted.
                Based on your listening history,
                Coldplay often helps during reflective
                moments.

                Fix You combines healing,
                hopefulness and familiarity,
                making it a strong match right now.
            </p>

            </div>

        </div>

    </div>

  )
}