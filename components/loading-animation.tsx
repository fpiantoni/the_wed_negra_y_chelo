"use client"

import { useEffect, useState } from "react"

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Bloquear scroll del body
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.height = '100%'
    
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Restaurar scroll del body
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.height = ''
    }, 2500) // 2.5 segundos

    return () => {
      clearTimeout(timer)
      // Limpiar estilos en caso de desmontaje
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.height = ''
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className="loading-overlay fixed inset-0 z-[99999] flex items-center justify-center bg-[#F6EFEB] animate-fade-out w-full h-full min-h-screen"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        backgroundColor: '#F6EFEB',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        isolation: 'isolate'
      }}
    >
      <div className="text-center space-y-8 px-4">
        {/* Logo principal con animación */}
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto animate-pulse-gentle">
            <img
              src="/red_logo.svg"
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