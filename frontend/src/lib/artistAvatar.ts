export const artistAvatarMap: Record<string, string> = {

  "Coldplay": "🌙",

  "Imagine Dragons": "⚡",

  "OneRepublic": "⭐",

  "The Weeknd": "🌃",

  "Arctic Monkeys": "🖤",

  "The Chainsmokers": "🎧",

  "Ed Sheeran": "🎸",

  "Adele": "🎙️",

  "Queen": "👑",

  "Sia": "🔥",

}

export function getArtistAvatar(

  artist: string

) {

  return (

    artistAvatarMap[artist]

    ||

    "♠"

  )

}