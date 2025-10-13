import { Button } from "@/components/ui/button"

export function GiftSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-[#8B2332] mb-6">SI QUERES HACERNOS UN REGALO</h2>
        <p className="text-sm md:text-base text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          El mejor regalo para nosotros es que nos acompañen en este día tan especial, pero si igualmente querés
          regalarnos algo, te dejamos nuestros datos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-[#8B2332] hover:bg-[#6B1A26] text-primary-foreground rounded-none px-12 py-6 text-base">
            CUENTA EN PESOS
          </Button>
          <Button className="bg-[#8B2332] hover:bg-[#6B1A26] text-primary-foreground rounded-none px-12 py-6 text-base">
            CUENTA EN DÓLARES
          </Button>
        </div>
      </div>
    </section>
  )
}
