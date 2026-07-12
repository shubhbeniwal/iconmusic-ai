import Logo from "@/components/Logo"

import HeroSection from "@/components/HeroSection"

import MoodInputCard from "@/components/MoodInputCard"

import RecommendationCard from "@/components/RecommendationCard"

import BottomNav from "@/components/BottomNav"


export default function Home() {

  return (

    <main className="min-h-screen pt-8 bg-black text-white pb-32 items-center">

      <div className="max-w-md mx-auto px-6 pt-10">

        <div className="mb-10">
          <Logo />
          <HeroSection />
        </div>

        <MoodInputCard />

      <div className="mt-6">
        <RecommendationCard

          title="Fix You"

          artist="Coldplay"

          image="/images/fix-you.jpg"

          match={92}

          reasons={[

            "Healing",

            "Hopeful",

            "You like Coldplay"

          ]}

        />
      </div>

      </div>

    <BottomNav />
      
    </main>

  )

}