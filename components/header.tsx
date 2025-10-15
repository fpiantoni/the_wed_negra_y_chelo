import Link from "next/link"

export function Header() {
  return (
    <header className="bg-[#F6EFEB] border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/logo_svg.svg"
            alt="Negra & Chelo"
            className="h-8 w-auto object-contain max-w-none"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-sm uppercase tracking-wide text-[#701114] hover:font-semibold transition-all font-poppins">
            Home
          </Link>
          <Link href="#nosotros" className="text-sm uppercase tracking-wide text-[#701114] hover:font-semibold transition-all font-poppins">
            Nosotros
          </Link>
          <Link href="#info" className="text-sm uppercase tracking-wide text-[#701114] hover:font-semibold transition-all font-poppins">
            Info Práctica
          </Link>
          <Link href="#confirmar" className="text-sm uppercase tracking-wide text-[#701114] hover:font-semibold transition-all font-poppins">
            Confirmar
          </Link>
        </nav>
      </div>
    </header>
  )
}
