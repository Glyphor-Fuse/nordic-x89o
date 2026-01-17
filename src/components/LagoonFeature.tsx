import { Droplets, Thermometer, Sparkles } from 'lucide-react';

export default function LagoonFeature() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/20955080/pexels-photo-20955080.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="People enjoying relaxation and recreation in Iceland's soothing Blue Lagoon geothermal spa."
    width="5184"
    height="2916"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/people-bathing-in-the-pool-of-the-blue-lagoon-geothermal-spa-in-iceland-20955080/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by It's MJ! on Pexels
    </a>
  </div>
</div>" 
          alt="Blue Lagoon" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-slate via-deep-slate/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-frost-500/10 border border-frost-500/20 text-frost-300 text-xs tracking-widest uppercase mb-6">
            <Sparkles className="w-3 h-3" />
            <span>Premium Experience</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            The Healing <br />
            <span className="text-frost-400">Silica Waters</span>
          </h2>
          <p className="text-frost-100/80 text-lg leading-relaxed mb-10 max-w-lg">
            Immerse yourself in milky-blue waters rich in silica, algae, and minerals. The lagoon maintains a perfect temperature year-round, offering a stark, comforting contrast to the arctic air.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-md p-6 border border-white/10 hover:border-frost-400/50 transition-colors">
              <Thermometer className="w-8 h-8 text-frost-400 mb-4" />
              <div className="text-2xl font-display font-bold text-white mb-1">39°C</div>
              <div className="text-xs text-frost-200 uppercase tracking-wider">Average Temp</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 border border-white/10 hover:border-frost-400/50 transition-colors">
              <Droplets className="w-8 h-8 text-frost-400 mb-4" />
              <div className="text-2xl font-display font-bold text-white mb-1">pH 7.5</div>
              <div className="text-xs text-frost-200 uppercase tracking-wider">Mineral Rich</div>
            </div>
          </div>

          <button className="bg-white text-deep-slate px-8 py-4 font-bold tracking-wide hover:bg-frost-200 transition-colors">
            RESERVE LAGOON ACCESS
          </button>
        </div>

        {/* Decorative glass card */}
        <div className="hidden lg:block relative">
          <div className="absolute -inset-4 bg-frost-400/20 blur-3xl rounded-full"></div>
          <img 
            src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/7531673/pexels-photo-7531673.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="A serene resort with bungalows amidst mossy volcanic rocks in Iceland."
    width="3024"
    height="4032"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/moss-covered-volcanic-rocks-with-bungalows-in-the-background-7531673/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Christopher Seufert on Pexels
    </a>
  </div>
</div>" 
            alt="Relaxation"
            className="relative rounded-2xl shadow-2xl border border-white/10 w-3/4 ml-auto"
          />
          <div className="absolute bottom-12 -left-12 bg-deep-slate/80 backdrop-blur-xl p-6 border border-white/10 max-w-xs shadow-xl">
            <p className="font-display text-xl text-white italic">"A surreal escape where the water meets the sky."</p>
            <div className="flex gap-1 mt-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-2 h-2 rounded-full bg-frost-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}