export function getMoodTheme(mood: string) {

  switch (mood?.toLowerCase()) {

    case "motivated":
    case "motivational":

      return {
        primary: "bg-emerald-500/20",
        secondary: "bg-orange-500/10",
        tertiary: "bg-yellow-500/10"
      }

    case "heartbroken":

      return {
        primary: "bg-rose-500/20",
        secondary: "bg-purple-500/10",
        tertiary: "bg-pink-500/10"
      }

    case "nostalgic":

      return {
        primary: "bg-amber-500/20",
        secondary: "bg-indigo-500/10",
        tertiary: "bg-orange-500/10"
      }

    case "chill":

      return {
        primary: "bg-cyan-500/20",
        secondary: "bg-blue-500/10",
        tertiary: "bg-sky-500/10"
      }

    case "happy":

      return {
        primary: "bg-yellow-500/20",
        secondary: "bg-orange-500/10",
        tertiary: "bg-amber-500/10"
      }

    default:

      return {
        primary: "bg-emerald-500/20",
        secondary: "bg-purple-500/10",
        tertiary: "bg-cyan-500/10"
      }

  }

}