import Logo from "@/components/Logo"

import HeroSection from "@/components/HeroSection"

import MoodInputCard from "@/components/MoodInputCard"

import RecommendationCard from "@/components/RecommendationCard"

import AIInsightPanel from "@/components/AIInsightPanel"

import BottomNav from "@/components/BottomNav"

import SectionTitle from "@/components/SectionTitle"

import MiniRecommendationCard from "@/components/MiniRecommendationCard"


export default function Home() {

  return (

    <main
      className="
      relative
      min-h-screen
      pt-8
      text-white
      pb-32
      overflow-hidden
      bg-black
      "
    >

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        h-[500px]
        w-[500px]
        rounded-full
        bg-emerald-500/20
        blur-[140px]
        pointer-events-none
        "
      />

      <div
        className="
        absolute
        top-40
        right-[-100px]
        h-72
        w-72
        rounded-full
        bg-purple-500/10
        blur-[120px]
        pointer-events-none
        "
      />

      <div
        className="
        absolute
        bottom-40
        left-[-100px]
        h-80
        w-80
        rounded-full
        bg-cyan-500/10
        blur-[140px]
        pointer-events-none
        "
      />

      <div
        className="
        absolute
        top-[700px]
        right-[-60px]
        h-60
        w-60
        rounded-full
        bg-green-500/10
        blur-[120px]
        pointer-events-none
        "
      />

      <div className="max-w-md mx-auto px-6 pt-10">

        <div className="mb-10">
          <Logo />
          <HeroSection />
        </div>

        <MoodInputCard />

      <div className="mt-6">
        <SectionTitle

          title="Today's Match"

          subtitle="Picked by Icon AI"

        />

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

        <AIInsightPanel />

        <SectionTitle

          title="More Matches"

          subtitle="Based on your music taste"

        />

        <div
          className="
          flex
          gap-4
          overflow-x-auto
          pb-4
          "
        >

          <MiniRecommendationCard
            title="Yellow"
            artist="Coldplay"
            image="/images/yellow.jpg"
          />

          <MiniRecommendationCard
            title="The Scientist"
            artist="Coldplay"
            image="/images/the-scientist.jpg"
          />

          <MiniRecommendationCard
            title="Viva La Vida"
            artist="Coldplay"
            image="/images/viva-la-vida.jpg"
          />

        </div>
      </div>

      </div>

    <BottomNav />
      
    </main>

  )

}