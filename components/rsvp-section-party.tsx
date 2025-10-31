import { Button } from "@/components/ui/button"

export function RsvpSectionParty() {
  return (
    <section id="confirmar" className="bg-[#701114] py-16 md:py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex justify-center">
          <img
            src="/venis-a-celebrar-nuestro-amor-titulo.svg"
            alt="Venis a celebrar nuestro amor con nosotros?"
            className="h-16 md:h-20 w-auto object-contain max-w-full"
          />
        </div>
        <p className="text-primary-foreground/90 mb-6 text-sm md:text-base font-poppins">
          Ojalá puedas ser parte de este día tan especial!
        </p>

        <Button
          asChild
          variant="outline"
          className="bg-[#F6EFEB] text-[#701114] hover:bg-[#F6EFEB]/90 rounded-full px-8 border-none font-poppins font-semibold text-base"
        >
          <a 
            href="https://forms.gle/VUDLoJSMAJ1K5Fnd7" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            CONFIRMAR ASISTENCIA
          </a>
        </Button>

        <p className="text-primary-foreground/60 text-xs mt-6 font-poppins font-light">*Confirmá asistencia antes del 15 de Noviembre.</p>
      </div>
    </section>
  )
}
