"use client"

export function HeroSection() {
  const images = [
    "/negra_y_chelo_1.png",
    "/negra_y_chelo_2.png",
    "/negra_y_chelo_3.png",
    "/negra_y_chelo_1.png",
    "/negra_y_chelo_2.png",
    "/negra_y_chelo_3.png",
  ]

  return (
    <section id="home" className="relative min-h-[500px] md:min-h-[600px] overflow-hidden bg-[#8B2332]">
      {/* Scrolling carousel container */}
      <div className="absolute inset-0 flex">
        <div className="flex gap-12 md:gap-16 animate-scroll-left items-center h-full">
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-[400px] md:w-[500px] h-[80%] grayscale">
              <img
                src={image || "/placeholder.svg"}
                alt={`Wedding photo ${index + 1}`}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex items-end pb-0 md:pb-1 pointer-events-none">
        <div className="relative ml-[60%]">
          {/* White logo */}
          <div className="w-48 h-48 md:w-60 md:h-60 flex items-center justify-center">
            <img
              src="/white_logo_2.png"
              alt="Negra & Chelo Wedding Logo"
              className="w-full h-full object-contain drop-shadow-2xl antialiased"
              style={{ 
                imageRendering: 'auto',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
