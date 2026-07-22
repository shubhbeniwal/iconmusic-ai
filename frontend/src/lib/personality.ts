export function generatePersonalityMessage(
    mood: string,
    historyCount: number
  ) {
  
    const moodLower = mood.toLowerCase()
  
    if (
      moodLower.includes("nostalg")
    ) {
      return historyCount > 3
        ? "You've been revisiting memories quite often lately."
        : "Looks like you're feeling reflective today."
    }
  
    if (
      moodLower.includes("motiv")
    ) {
      return historyCount > 3
        ? "You've been chasing motivation consistently."
        : "You're bringing strong energy today."
    }
  
    if (
      moodLower.includes("heal")
    ) {
      return "You seem focused on recovery and growth."
    }
  
    if (
      moodLower.includes("heart")
    ) {
      return "Music can be a powerful companion through difficult emotions."
    }
  
    return "I'm learning more about your listening personality with every session."
  }