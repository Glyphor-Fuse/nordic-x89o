import { ArrowUpRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: "Black Sand Beach",
    location: "Reynisfjara",
    image: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/14376901/pexels-photo-14376901.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Woman in elegant red dress on Reynisfjara Beach, Iceland, showcasing dramatic rock formations."
    width="3295"
    height="4943"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/woman-in-red-spaghetti-strap-dress-standing-beside-the-rock-14376901/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Erica On The Go on Pexels
    </a>
  </div>
</div>",
    size: "large"
  },
  {
    id: 2,
    title: "Ice Caves",
    location: "Vatnajökull",
    image: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/31028950/pexels-photo-31028950.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Explore the mesmerizing colors inside a natural icy formation."
    width="3648"
    height="5472"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/stunning-view-inside-an-ice-cave-31028950/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Shuo Wang on Pexels
    </a>
  </div>
</div>",
    size: "small"
  },
  {
    id: 3,
    title: "Geothermal",
    location: "Mývatn",
    image: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/3115006/pexels-photo-3115006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Aerial view of geothermal rocks and aqua waters at Iceland's Blue Lagoon."
    width="2237"
    height="2237"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/white-and-black-stone-fragment-3115006/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Mark Neal on Pexels
    </a>
  </div>
</div>",
    size: "small"
  }
];

export default function DestinationGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h3 className="text-frost-400 uppercase tracking-widest text-sm font-medium mb-2">Curated Expeditions</h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Frozen Landscapes</h2>
        </div>
        <button className="text-white border-b border-frost-400 pb-1 hover:text-frost-300 transition-colors text-sm tracking-widest uppercase">
          View All Locations
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
        {/* Large Item */}
        <div className="md:col-span-1 group relative overflow-hidden h-[400px] md:h-full cursor-pointer">
          <img 
            src={destinations[0].image} 
            alt={destinations[0].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-slate/90 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-frost-300 text-sm tracking-wider mb-2">{destinations[0].location}</p>
                <h3 className="font-display text-3xl text-white">{destinations[0].title}</h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-deep-slate transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Small Items Column */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {destinations.slice(1).map((dest) => (
            <div key={dest.id} className="group relative overflow-hidden h-[300px] md:h-full cursor-pointer">
              <img 
                src={dest.image} 
                alt={dest.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-slate/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-frost-300 text-sm tracking-wider mb-2">{dest.location}</p>
                    <h3 className="font-display text-2xl text-white">{dest.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-deep-slate transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}