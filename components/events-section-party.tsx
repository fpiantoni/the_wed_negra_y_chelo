import { Button } from "@/components/ui/button"

export function EventsSectionParty() {
  return (
    <section id="info" className="bg-[#F6EFEB] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center max-w-4xl mx-auto">
          {/* Reception Event - Centered */}
          <div className="p-6 text-center flex flex-col items-center max-w-md">
            <div className="w-48 h-48 md:w-56 md:h-56 mb-6 flex items-center justify-center">
              <img
                src="/logo_party.svg"
                alt="Fiesta"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
                style={{ verticalAlign: 'middle' }}
              />
            </div>

            <div className="space-y-4 w-full">
              <p className="text-sm text-[#701114] font-medium font-poppins">19:30 HS | FIESTA</p>
              <h3 className="text-xl md:text-2xl font-semibold text-[#701114] leading-tight font-poppins">
                ESTANCIA<br />CAUSANA
              </h3>
              <Button 
                asChild
                className="bg-[#701114] hover:bg-[#5a0e10] text-white rounded-full px-8 py-3 text-sm font-medium mt-6 font-poppins"
              >
                <a 
                  href="https://maps.app.goo.gl/2ffbaPAJQgrDGS27A?g_st=ipc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  ¿CÓMO LLEGAR?
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
