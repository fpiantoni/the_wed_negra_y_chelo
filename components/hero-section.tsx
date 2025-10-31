"use client";

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [clickCount, setClickCount] = useState(0)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()

  const images = [
    "/negra_y_chelo_1.png",
    "/negra_y_chelo_2.png",
    "/negra_y_chelo_3.png",
    "/negra_y_chelo_1.png",
    "/negra_y_chelo_2.png",
    "/negra_y_chelo_3.png",
    "/negra_y_chelo_1.png",
    "/negra_y_chelo_2.png",
    "/negra_y_chelo_3.png",
    "/negra_y_chelo_1.png",
    "/negra_y_chelo_2.png",
    "/negra_y_chelo_3.png",
  ];

  const handleLogoClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)

    // Limpiar timeout anterior si existe
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current)
    }

    // Si alcanza 5 clics, borrar localStorage y resetear
    if (newCount >= 5) {
      localStorage.removeItem("wedding-access")
      setClickCount(0)
      alert("¡Acceso restaurado! Ahora puedes navegar libremente.")
      // Recargar la página para que tome efecto
      router.refresh()
    } else {
      // Resetear el contador después de 2 segundos de inactividad
      clickTimeoutRef.current = setTimeout(() => {
        setClickCount(0)
      }, 2000)
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[500px] md:min-h-[600px] overflow-hidden bg-[#701114]"
    >
      {/* Scrolling carousel container */}
      <div className="absolute inset-0 flex">
        <div className="flex gap-12 md:gap-16 animate-scroll-left items-center h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] md:w-[500px] h-[80%] grayscale"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Wedding photo ${index + 1}`}
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex items-end pb-4 md:pb-1">
        <div className="relative ml-[55%] md:ml-[60%]">
          {/* White logo */}
          <div 
            className="w-36 h-36 md:w-60 md:h-60 flex items-center justify-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src="/logo_de_las_fotos.svg"
              alt="Negra & Chelo Wedding Logo"
              className="w-full h-full object-contain drop-shadow-2xl antialiased pointer-events-none"
              style={{
                imageRendering: "auto",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
