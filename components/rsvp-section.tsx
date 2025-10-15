import { Button } from "@/components/ui/button"

export function RsvpSection() {
  return (
    <section id="confirmar" className="bg-[#701114] py-16 md:py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4 font-poppins">
          VENIS A CELEBRAR NUESTRO AMOR CON NOSOTROS?
        </h2>
        <p className="text-primary-foreground/90 mb-8 text-sm md:text-base font-poppins">
          Ojalá puedas ser parte de este día tan especial
        </p>

        <Button
          asChild
          variant="outline"
          className="bg-[#F6EFEB] text-[#701114] hover:bg-[#F6EFEB]/90 rounded-full px-8 border-none font-poppins font-semibold text-base"
        >
          <a 
            href="https://forms.gle/PhhJ6SECBC4p6bHJ9" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            CONFIRMAR ASISTENCIA
          </a>
        </Button>

        <p className="text-primary-foreground/70 text-xs mt-6 font-poppins">Confirmá asistencia antes del 15 de noviembre</p>
      </div>
    </section>
  )
}
