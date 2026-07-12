import BottomNav from "@/components/BottomNav"

export default function Home() {

  return (

    <main className="min-h-screen bg-black text-white">

      <div className="max-w-md mx-auto px-6 pt-10">

        <div className="mb-10">

          <div className="text-5xl">
            ♠
          </div>

          <h1 className="text-3xl font-bold mt-4">
            IconMusic AI
          </h1>

          <p className="text-zinc-400 mt-2">
            Your AI Music Companion
          </p>

        </div>

        <div className="bg-zinc-900 rounded-3xl p-6">

          <h2 className="text-xl font-semibold">
            How are you feeling today?
          </h2>

          <textarea
            className="
            mt-4
            w-full
            rounded-xl
            bg-zinc-800
            p-4
            text-white
            resize-none
            "
            rows={4}
            placeholder="Need motivation for gym..."
          />

          <button
            className="
            mt-4
            w-full
            rounded-xl
            bg-green-500
            py-3
            font-semibold
            text-black
            "
          >
            Discover Music
          </button>

        </div>

      </div>

      <BottomNav />

    </main>

  )

}