"use client"

export function AnimatedTextBanner() {
  const text = "CELEBRA NUESTRO AMOR CON NOSOTROS"

  return (
    <section className="w-full bg-[#701114] py-6 overflow-hidden">
      <div className="flex animate-infinite-scroll">
        <div className="flex items-center whitespace-nowrap">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="text-white text-xl md:text-2xl font-semibold tracking-wide px-4 font-poppins">
              {text} ** 
            </span>
          ))}
        </div>
        <div className="flex items-center whitespace-nowrap">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="text-white text-xl md:text-2xl font-semibold tracking-wide px-4 font-poppins">
              {text} ** 
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
