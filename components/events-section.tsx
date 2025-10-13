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
              <div className="w-full aspect-[4/3] bg-[#8B2332] mb-4 flex items-center justify-center">
                <Church className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
              </div>

              <div className="text-center space-y-3">
                <p className="text-xs md:text-sm text-muted-foreground">18:00 HS | IGLESIA</p>
                <h3 className="text-lg md:text-xl font-serif text-[#8B2332]">
                  IGLESIA FALDA
                  <br />
                  DEL CARMEN
                </h3>
                <Button className="bg-[#8B2332] hover:bg-[#6B1A26] text-primary-foreground rounded-full px-6 text-sm">
                  COMO LLEGAR?
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Reception Event */}
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="w-full aspect-[4/3] bg-[#8B2332] mb-4 flex items-center justify-center">
                <PartyPopper className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
              </div>

              <div className="text-center space-y-3">
                <p className="text-xs md:text-sm text-muted-foreground">19:30 HS | FIESTA</p>
                <h3 className="text-lg md:text-xl font-serif text-[#8B2332]">
                  ESTANCIA
                  <br />
                  CAUSANA
                </h3>
                <Button className="bg-[#8B2332] hover:bg-[#6B1A26] text-primary-foreground rounded-full px-6 text-sm">
                  COMO LLEGAR?
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
