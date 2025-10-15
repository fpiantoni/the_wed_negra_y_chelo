"use client"

import { useEffect, useState } from "react"

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // 2.5 segundos

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F6EFEB] animate-fade-out">
      <div className="text-center space-y-8">
        {/* Logo principal con animación */}
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto animate-pulse-gentle">
            <img
              src="/logo_rojo.png"
              alt="Negra & Chelo"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Anillo animado alrededor del logo */}
          <div className="absolute inset-0 rounded-full border-2 border-[#701114] animate-spin-slow opacity-30"></div>
        </div>

        {/* Texto animado */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#701114] font-poppins animate-fade-in-up">
            Negra & Chelo
          </h1>
          <p className="text-sm text-[#701114]/70 font-poppins animate-fade-in-up-delay">
            Cargando nuestra historia...
          </p>
        </div>

        {/* Corazones flotantes */}
        <div className="relative h-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 space-x-4 flex">
            <div className="w-2 h-2 bg-[#701114] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#701114] rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-2 h-2 bg-[#701114] rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </div>
    </div>
  )
}