export const moodGradients: Record<string, string> = {

  healing:
    "from-cyan-500 to-blue-700",

  hopeful:
    "from-sky-500 to-cyan-700",

  emotional:
    "from-blue-600 to-indigo-900",

  motivational:
    "from-orange-500 to-red-700",

  powerful:
    "from-red-500 to-orange-700",

  gym:
    "from-red-600 to-black",

  nostalgic:
    "from-purple-500 to-indigo-800",

  romantic:
    "from-pink-500 to-purple-700",

  dreamy:
    "from-violet-500 to-fuchsia-700",

  chill:
    "from-teal-500 to-cyan-700",

  happy:
    "from-yellow-400 to-orange-500",

  energetic:
    "from-orange-500 to-red-600",

  sad:
    "from-slate-600 to-slate-900",

  heartbreak:
    "from-indigo-700 to-black",

  uplifting:
    "from-green-400 to-emerald-700",

}

export function getMoodGradient(

  moods: string[]

) {

  for (

    const mood of moods

  ) {

    if (

      moodGradients[mood]

    ) {

      return moodGradients[mood]

    }

  }

  return "from-zinc-700 to-zinc-900"

}