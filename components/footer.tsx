import { Instagram, Download } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F6EFEB] py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
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
              href="https://apps.apple.com/app/dots-the-app/id1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#701114] flex items-center justify-center text-primary-foreground hover:bg-[#5a0e10] transition-colors"
            >
              <Download className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-8 flex justify-center">
            <img
              src="/red_logo.svg"
              alt="Negra & Chelo Logo"
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
