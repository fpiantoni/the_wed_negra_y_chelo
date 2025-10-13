export function DateSection() {
  return (
    <section className="bg-background py-12 overflow-visible">
      <div className="container mx-auto px-4 overflow-visible">
        <div className="max-w-2xl mx-auto border-2 border-foreground overflow-visible">
          {/* Month header */}
          <div className="border-b-2 border-foreground py-3 text-center">
            <div className="text-base md:text-lg uppercase tracking-widest">DICIEMBRE</div>
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-3 overflow-visible">
            {/* Saturday 6 */}
            <div className="border-r-2 border-foreground text-center py-6 md:py-8">
              <div className="text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4">SÁBADO</div>
              <div className="text-6xl md:text-7xl font-bold">6</div>
            </div>

            {/* Sunday 7 - with circle */}
            <div className="border-r-2 border-foreground text-center py-6 md:py-8 relative overflow-visible">
              <div className="text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4">DOMINGO</div>
              <div className="text-6xl md:text-7xl font-bold relative inline-block z-10">
                7
              </div>
              {/* Custom circle image overlay - positioned relative to cell */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1] overflow-visible"
                style={{ 
                  width: "20vw", 
                  height: "20vw",
                  maxWidth: "320px",
                  maxHeight: "320px",
                  minWidth: "120px",
                  minHeight: "120px"
                }}
              >
                <img
                  src="/circulo_fecha.png"
                  alt="Custom red circle"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Monday 8 */}
            <div className="text-center py-6 md:py-8">
              <div className="text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4">LUNES</div>
              <div className="text-6xl md:text-7xl font-bold">8</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
