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
            <button className="w-12 h-12 rounded-full bg-[#8B2332] flex items-center justify-center text-primary-foreground hover:bg-[#6B1A26] transition-colors">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#8B2332] flex items-center justify-center text-primary-foreground hover:bg-[#6B1A26] transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>

          <div className="pt-8">
            <div className="text-6xl md:text-8xl font-serif text-[#8B2332] flex items-center justify-center gap-2">
              <span>N</span>
              <span className="text-5xl md:text-7xl">❤</span>
              <span>C</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
