import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Внимание!</p>
            <p>На всех языках на свете</p>
            <p>объясняется к нашему</p>
            <p>свадебному организатору:</p>
            <p>Anna</p>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/thewed_nyc?igsh=MXIwanJzY3lsNWd3OQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#AA1F33] flex items-center justify-center text-primary-foreground hover:bg-[#8B1A28] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://dotstheapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#AA1F33] flex items-center justify-center text-primary-foreground hover:bg-[#8B1A28] transition-colors"
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
