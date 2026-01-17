import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/19320672/pexels-photo-19320672.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
          alt="Glacier Landscape" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-slate/40 via-transparent to-deep-slate/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 mt-16">
        <h2 className="text-frost-300 tracking-[0.3em] text-sm md:text-base mb-6 font-medium animate-fade-in-up">
          EST. 64° NORTH
        </h2>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-8 drop-shadow-2xl">
          INTO THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-frost-400">
            UNKNOWN
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-frost-100 text-lg md:text-xl font-light leading-relaxed mb-12 border-l-2 border-frost-300 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          Traverse the eternal ice of Vatnajökull and immerse yourself in the healing geothermal waters of the Blue Lagoon.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float opacity-70">
        <span className="text-[10px] tracking-widest uppercase text-frost-200">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5 text-white" />
      </div>
    </div>
  );
}