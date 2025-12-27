import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-[#e5e7eb] relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="code-rain"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="relative z-10">
        <Hero />
        <div className="py-16">
          <About />
        </div>
        <div className="py-16">
          <Events />
        </div>
        <div className="py-16">
          <Team />
        </div>
      </div>
    </main>
  );
}
