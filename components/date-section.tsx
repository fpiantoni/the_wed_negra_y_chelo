export function DateSection() {
  return (
    <section className="bg-[#F6EFEB] py-12 overflow-visible">
      <div className="container mx-auto px-4 overflow-visible">
        <div className="max-w-2xl mx-auto border-2 border-[#701114] overflow-visible">
          {/* Month header */}
          <div className="border-b-2 border-[#701114] py-3 text-center">
            <div className="text-base md:text-lg uppercase tracking-widest font-poppins font-semibold text-[#701114]">DICIEMBRE</div>
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-3 overflow-visible">
            {/* Saturday 6 */}
            <div className="border-r-2 border-[#701114] text-center py-6 md:py-8">
              <div className="text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4 font-poppins text-[#701114]">SÁBADO</div>
              <div className="text-6xl md:text-7xl font-bold font-poppins text-[#701114]">6</div>
            </div>

            {/* Sunday 7 - with circle */}
            <div className="border-r-2 border-[#701114] text-center py-6 md:py-8 relative overflow-visible">
              <div className="text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4 font-poppins text-[#701114]">DOMINGO</div>
              <div className="text-6xl md:text-7xl font-bold relative inline-block z-10 font-poppins text-[#701114]">
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
                  src="/mancha_calendario.svg"
                  alt="Custom red circle"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Monday 8 */}
            <div className="text-center py-6 md:py-8">
              <div className="text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4 font-poppins text-[#701114]">LUNES</div>
              <div className="text-6xl md:text-7xl font-bold font-poppins text-[#701114]">8</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
