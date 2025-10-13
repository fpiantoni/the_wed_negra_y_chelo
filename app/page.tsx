import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { AnimatedTextBanner } from "@/components/animated-text-banner"
import { DateSection } from "@/components/date-section"
import { EventsSection } from "@/components/events-section"
import { RsvpSection } from "@/components/rsvp-section"
import { GiftSection } from "@/components/gift-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StorySection />
      <AnimatedTextBanner />
      <DateSection />
      <EventsSection />
      <RsvpSection />
      <GiftSection />
      <Footer />
    </main>
  )
}
