"use client"

export function NotitaSection() {
  return (
    <section className="bg-[#F6EFEB] py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center">
          <img
            src="/notita_de_abajo.svg"
            alt="Notita"
            className="h-32 md:h-56 lg:h-72 xl:h-80 w-auto object-contain max-w-full"
          />
        </div>
      </div>
    </section>
  )
}