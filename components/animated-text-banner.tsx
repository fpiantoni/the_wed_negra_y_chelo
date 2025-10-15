"use client"

export function AnimatedTextBanner() {
  const text = "CELEBRA NUESTRO AMOR CON NOSOTROS"

  return (
    <section className="w-full bg-[#701114] py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll-text">
        {/* Repeat the text multiple times for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-white text-xl md:text-2xl font-semibold tracking-wide px-4 font-poppins">{text}</span>
            <span className="text-white text-xl md:text-2xl px-2">**</span>
          </div>
        ))}
      </div>
    </section>
  )
}
