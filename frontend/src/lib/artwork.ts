export const artworkMap: Record<string, string> = {

  "Fix You":
    "/images/fix-you.jpg",

  "Yellow":
    "/images/yellow.jpg",

  "The Scientist":
    "/images/the-scientist.jpg",

  "Viva La Vida":
    "/images/viva-la-vida.jpg",

  "Believer":
    "/images/believer.jpg",

}

export function getArtwork(

  title: string

) {

  return (

    artworkMap[title]

    ||

    "/images/placeholder.jpg"

  )

}