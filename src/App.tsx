import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExpeditionFinder from './components/ExpeditionFinder';
import DestinationGrid from './components/DestinationGrid';
import LagoonFeature from './components/LagoonFeature';
import AuroraFooter from './components/AuroraFooter';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-frost-400 selection:text-deep-slate">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-20 -mt-24 px-4">
          <ExpeditionFinder />
        </div>
        <DestinationGrid />
        <LagoonFeature />
      </main>
      <AuroraFooter />
    </div>
  );
}

export default App;