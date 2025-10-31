"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { AnimatedTextBanner } from "@/components/animated-text-banner"
import { DateSection } from "@/components/date-section"
import { EventsSectionParty } from "@/components/events-section-party"
import { RsvpSectionParty } from "@/components/rsvp-section-party"
import { GiftSection } from "@/components/gift-section"
import { NotitaSection } from "@/components/notita-section"
import { Footer } from "@/components/footer"
import { LoadingAnimation } from "@/components/loading-animation"

export default function PartyPage() {
  useEffect(() => {
    // Marcar en localStorage que el usuario accedió a /party
    localStorage.setItem("wedding-access", "party")
  }, [])

  return (
    <main className="min-h-screen">
      <LoadingAnimation />
      <Header />
      <div className="pt-20"> {/* Padding para compensar header fijo */}
        <HeroSection />
        <StorySection />
        <AnimatedTextBanner />
        <DateSection />
        <EventsSectionParty />
        <RsvpSectionParty />
        <GiftSection />
        <NotitaSection />
        <Footer />
      </div>
    </main>
  )
}
