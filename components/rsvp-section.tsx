import { Button } from "@/components/ui/button"

export function RsvpSection() {
  return (
    <section id="confirmar" className="bg-[#8B2332] py-16 md:py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif text-primary-foreground mb-4">
          VENIS A CELEBRAR NUESTRO AMOR CON NOSOTROS?
        </h2>
        <p className="text-primary-foreground/90 mb-8 text-sm md:text-base">
          Ojalá puedas ser parte de este día tan especial
        </p>

        <Button
          variant="outline"
          className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 border-none"
        >
          CONFIRMAR ASISTENCIA
        </Button>

        <p className="text-primary-foreground/70 text-xs mt-6">*Confirmá asistencia antes del</p>
      </div>
    </section>
  )
}
