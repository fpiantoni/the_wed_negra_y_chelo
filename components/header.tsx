"use client"

import Link from "next/link"

export function Header() {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerHeight = 80 // Altura aproximada del header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    smoothScrollTo(sectionId)
  }

  return (
    <header className="bg-[#F6EFEB] border-b border-border fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/logo_svg.svg"
            alt="Negra & Chelo"
            className="h-8 w-auto object-contain max-w-none"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-sm uppercase tracking-wide text-[#701114] hover:font-semibold transition-all font-poppins cursor-pointer relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#701114] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#nosotros" 
            onClick={(e) => handleNavClick(e, 'nosotros')}
            className="text-sm uppercase tracking-wide text-[#701114] hover:font-semibold transition-all font-poppins cursor-pointer relative group"
          >
            Nosotros
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#701114] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#info" 
            onClick={(e) => handleNavClick(e, 'info')}
            className="text-sm uppercase tracking-wide text-[#701114] hover:font-semibold transition-all font-poppins cursor-pointer relative group"
          >
            Info Práctica
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#701114] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#confirmar" 
            onClick={(e) => handleNavClick(e, 'confirmar')}
            className="text-sm uppercase tracking-wide text-[#701114] hover:font-semibold transition-all font-poppins cursor-pointer relative group"
          >
            Confirmar
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#701114] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </div>
    </header>
  )
}
