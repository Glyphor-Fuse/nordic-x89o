import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

export default function ExpeditionFinder() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-2 md:p-4 rounded-none md:rounded-full shadow-2xl flex flex-col md:flex-row gap-2">
        
        {/* Destination Input */}
        <div className="flex-1 flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors group cursor-pointer rounded-t-lg md:rounded-l-full">
          <MapPin className="text-frost-400 w-5 h-5 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-frost-300">Destination</span>
            <span className="font-display text-white text-lg">Vatnajökull</span>
          </div>
        </div>

        {/* Date Input */}
        <div className="flex-1 flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors group cursor-pointer">
          <Calendar className="text-frost-400 w-5 h-5 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-frost-300">Dates</span>
            <span className="font-display text-white text-lg">Oct 24 - Nov 02</span>
          </div>
        </div>

        {/* Guests Input */}
        <div className="flex-1 flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors group cursor-pointer rounded-b-lg md:rounded-none">
          <Users className="text-frost-400 w-5 h-5 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-frost-300">Travelers</span>
            <span className="font-display text-white text-lg">2 Adults</span>
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-frost-500 hover:bg-frost-400 text-deep-slate font-bold px-8 py-4 md:rounded-full rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
          <span>SEARCH</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}