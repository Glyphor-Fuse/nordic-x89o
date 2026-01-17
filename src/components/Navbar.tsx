import { Menu, Search, Wind } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-deep-slate/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wind className="w-8 h-8 text-frost-300" />
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            NORDIC<span className="text-frost-300">FROST</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-light text-sm tracking-widest text-frost-100">
          <a href="#" className="hover:text-white transition-colors">GLACIERS</a>
          <a href="#" className="hover:text-white transition-colors">LAGOONS</a>
          <a href="#" className="hover:text-white transition-colors">NORTHERN LIGHTS</a>
          <a href="#" className="hover:text-white transition-colors">EXPEDITIONS</a>
        </div>

        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 text-frost-200 cursor-pointer hover:text-white transition-colors" />
          <button className="hidden md:block px-6 py-2 border border-glass-border text-sm backdrop-blur-sm hover:bg-white hover:text-deep-slate transition-all duration-300">
            BOOK NOW
          </button>
          <Menu className="w-6 h-6 md:hidden text-white" />
        </div>
      </div>
    </nav>
  );
}