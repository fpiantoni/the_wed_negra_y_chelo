import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { AnimatedTextBanner } from "@/components/animated-text-banner"
import { DateSection } from "@/components/date-section"
import { EventsSection } from "@/components/events-section"
import { RsvpSection } from "@/components/rsvp-section"
import { GiftSection } from "@/components/gift-section"
import { Footer } from "@/components/footer"
import { LoadingAnimation } from "@/components/loading-animation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingAnimation />
      <Header />
      <div className="pt-20"> {/* Padding para compensar header fijo */}
        <HeroSection />
        <StorySection />
        <AnimatedTextBanner />
        <DateSection />
        <EventsSection />
        <RsvpSection />
        <GiftSection />
        <Footer />
      </div>
    </main>
  )
}
