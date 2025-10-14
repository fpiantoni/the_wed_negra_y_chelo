import { Button } from "@/components/ui/button"
import { Church, PartyPopper } from "lucide-react"

export function EventsSection() {
  return (
    <section id="info" className="bg-[#F6EFEB] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {/* Church Event */}
          <div className="p-6 text-center">
            <div className="w-full aspect-[4/3] bg-[#AA1F33] mb-6 flex items-center justify-center rounded-lg">
              <Church className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-[#AA1F33] font-medium">18:00 HS | IGLESIA</p>
              <h3 className="text-xl md:text-2xl font-serif text-[#AA1F33] leading-tight">
                IGLESIA FALDA<br />DEL CARMEN
              </h3>
              <Button 
                asChild
                className="bg-[#AA1F33] hover:bg-[#8B1A28] text-white rounded-full px-8 py-3 text-sm font-medium mt-6"
              >
                <a 
                  href="https://maps.app.goo.gl/7DdkerC4Lr4soE1v5?g_st=ipc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  COMO LLEGAR?
                </a>
              </Button>
            </div>
          </div>

          {/* Reception Event */}
          <div className="p-6 text-center">
            <div className="w-full aspect-[4/3] bg-[#AA1F33] mb-6 flex items-center justify-center rounded-lg">
              <PartyPopper className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-[#AA1F33] font-medium">19:30 HS | FIESTA</p>
              <h3 className="text-xl md:text-2xl font-serif text-[#AA1F33] leading-tight">
                ESTANCIA<br />CAUSANA
              </h3>
              <Button 
                asChild
                className="bg-[#AA1F33] hover:bg-[#8B1A28] text-white rounded-full px-8 py-3 text-sm font-medium mt-6"
              >
                <a 
                  href="https://maps.app.goo.gl/2ffbaPAJQgrDGS27A?g_st=ipc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  COMO LLEGAR?
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
