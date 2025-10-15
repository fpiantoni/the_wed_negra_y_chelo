import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F6EFEB] py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="text-sm text-[#701114] space-y-2 font-poppins">
            <p>¡Seguinos en nuestras redes</p>
            <p>y descargá la app para</p>
            <p>compartir los momentos!</p>
            <p className="mt-4 font-semibold font-poppins">Negra & Chelo</p>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/thewed_nyc?igsh=MXIwanJzY3lsNWd3OQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#701114] flex items-center justify-center text-primary-foreground hover:bg-[#5a0e10] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://dotstheapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#701114] flex items-center justify-center text-primary-foreground hover:bg-[#5a0e10] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-8 flex justify-center">
            <img
              src="/logo_rojo.png"
              alt="Negra & Chelo Logo"
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
