import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

export default function AuroraFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-deep-slate pt-32 pb-12 px-6 overflow-hidden border-t border-white/5">
      {/* Aurora Effect CSS */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-frost-500/10 to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-3xl font-bold text-white mb-6">NORDIC<span className="text-frost-300">FROST</span></h2>
            <p className="text-frost-200/60 max-w-sm mb-8">
              Curating exceptional expeditions to the edge of the world. Iceland is not just a destination; it is a feeling.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-frost-500 hover:text-deep-slate transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-frost-500 hover:text-deep-slate transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-frost-500 hover:text-deep-slate transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-frost-200/60 text-sm">
              <li className="hover:text-frost-300 cursor-pointer transition-colors">Glacier Hikes</li>
              <li className="hover:text-frost-300 cursor-pointer transition-colors">Ice Caves</li>
              <li className="hover:text-frost-300 cursor-pointer transition-colors">Blue Lagoon</li>
              <li className="hover:text-frost-300 cursor-pointer transition-colors">Volcano Tours</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-frost-200/60 text-sm">
              <li className="hover:text-frost-300 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-frost-300 cursor-pointer transition-colors">Sustainability</li>
              <li className="hover:text-frost-300 cursor-pointer transition-colors">Travel Guides</li>
              <li className="hover:text-frost-300 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-frost-200/40 text-xs mb-4 md:mb-0">
            © 2024 Nordic Frost Expeditions. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white uppercase tracking-widest hover:text-frost-300 transition-colors"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}