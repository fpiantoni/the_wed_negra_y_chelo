import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Church, PartyPopper } from "lucide-react"

export function EventsSection() {
  return (
    <section id="info" className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {/* Church Event */}
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="w-full aspect-[4/3] bg-[#AA1F33] mb-4 flex items-center justify-center">
                <Church className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
              </div>

              <div className="text-center space-y-3">
                <p className="text-xs md:text-sm text-muted-foreground">18:00 HS | IGLESIA</p>
                <h3 className="text-lg md:text-xl font-serif text-[#AA1F33]">
                  IGLESIA FALDA
                  <br />
                  DEL CARMEN
                </h3>
                <Button 
                  asChild
                  className="bg-[#AA1F33] hover:bg-[#8B1A28] text-primary-foreground rounded-full px-6 text-sm"
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
            </CardContent>
          </Card>

          {/* Reception Event */}
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="w-full aspect-[4/3] bg-[#AA1F33] mb-4 flex items-center justify-center">
                <PartyPopper className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
              </div>

              <div className="text-center space-y-3">
                <p className="text-xs md:text-sm text-muted-foreground">19:30 HS | FIESTA</p>
                <h3 className="text-lg md:text-xl font-serif text-[#AA1F33]">
                  ESTANCIA
                  <br />
                  CAUSANA
                </h3>
                <Button 
                  asChild
                  className="bg-[#AA1F33] hover:bg-[#8B1A28] text-primary-foreground rounded-full px-6 text-sm"
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
