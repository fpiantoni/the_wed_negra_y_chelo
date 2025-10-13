export function DateSection() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto border-2 border-foreground">
          {/* Month header */}
          <div className="border-b-2 border-foreground py-3 text-center">
            <div className="text-base md:text-lg uppercase tracking-widest">DICIEMBRE</div>
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-3">
            {/* Saturday 6 */}
            <div className="border-r-2 border-foreground text-center py-6 md:py-8">
              <div className="text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4">SÁBADO</div>
              <div className="text-6xl md:text-7xl font-bold">6</div>
            </div>

            {/* Sunday 7 - with circle */}
            <div className="border-r-2 border-foreground text-center py-6 md:py-8 relative">
              <div className="text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4">DOMINGO</div>
              <div className="text-6xl md:text-7xl font-bold relative inline-block">
                7
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 200 200"
                  style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "140%", height: "140%" }}
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="#8B2332"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{
                      filter: "url(#roughen)",
                    }}
                  />
                  <defs>
                    <filter id="roughen">
                      <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                    </filter>
                  </defs>
                </svg>
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
