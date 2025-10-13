"use client"

export function AnimatedTextBanner() {
  const text = "CELEBRA NUESTRO AMOR CON NOSOTROS"

  return (
    <section className="w-full bg-[#8B2332] py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll-text">
        {/* Repeat the text multiple times for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-white text-xl md:text-2xl font-serif tracking-wide px-4">{text}</span>
            <span className="text-white text-xl md:text-2xl px-2">**</span>
          </div>
        ))}
      </div>
    </section>
  )
}
