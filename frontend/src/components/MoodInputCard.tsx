export default function MoodInputCard() {

  return (

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
        bg-white
        text-black
        py-3
        font-semibold
        "
      >
        Discover Music
      </button>

    </div>

  )

}