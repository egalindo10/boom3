import React, { useState, useEffect } from 'react';
import { BoomHeroScene, AuthorScene } from './components/BoomScene';
import { MagicalRealismVisual, BoomTimeline, AuthorMap } from './components/BoomVisuals';
import { ArrowDown, Menu, X, BookOpen, Feather, Globe, History } from 'lucide-react';

const AuthorCard = ({ name, role, delay }: { name: string, role: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 w-full max-w-xs hover:border-boom-gold/30" style={{ animationDelay: delay }}>
      <h3 className="font-serif text-3xl text-stone-900 text-center mb-3 italic">{name}</h3>
      <div className="w-12 h-0.5 bg-boom-gold mb-4 opacity-40"></div>
      <p className="text-[10px] text-stone-500 font-bold uppercase tracking-[0.2em] text-center leading-relaxed">{role}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-boom-cream text-stone-800 selection:bg-boom-gold selection:text-white font-body">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-boom-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-boom-earth rounded-full flex items-center justify-center text-white font-serif font-bold text-2xl shadow-md pb-1">B</div>
            <span className={`font-serif font-bold text-xl tracking-widest transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              EL BOOM <span className="font-normal text-stone-400 italic">1960-1970</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.15em] text-stone-500 uppercase">
            <a href="#introduction" onClick={scrollToSection('introduction')} className="hover:text-boom-gold transition-colors cursor-pointer">Introduction</a>
            <a href="#concepts" onClick={scrollToSection('concepts')} className="hover:text-boom-gold transition-colors cursor-pointer">Concepts</a>
            <a href="#history" onClick={scrollToSection('history')} className="hover:text-boom-gold transition-colors cursor-pointer">History</a>
            <a href="#authors" onClick={scrollToSection('authors')} className="hover:text-boom-gold transition-colors cursor-pointer">Authors</a>
            <a 
              href="#authors" 
              onClick={scrollToSection('authors')} 
              className="px-6 py-2.5 bg-boom-earth text-white rounded-full hover:bg-stone-800 transition-all shadow-md cursor-pointer"
            >
              Explore
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-boom-cream flex flex-col items-center justify-center gap-10 text-2xl font-serif animate-fade-in">
            <a href="#introduction" onClick={scrollToSection('introduction')} className="hover:text-boom-gold transition-colors cursor-pointer uppercase italic">Introduction</a>
            <a href="#concepts" onClick={scrollToSection('concepts')} className="hover:text-boom-gold transition-colors cursor-pointer uppercase italic">Concepts</a>
            <a href="#history" onClick={scrollToSection('history')} className="hover:text-boom-gold transition-colors cursor-pointer uppercase italic">History</a>
            <a href="#authors" onClick={scrollToSection('authors')} className="hover:text-boom-gold transition-colors cursor-pointer uppercase italic">Authors</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <BoomHeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(245,245,240,0.8)_0%,rgba(245,245,240,0.4)_50%,rgba(245,245,240,0.2)_100%)]" />

        <div className="relative z-10 container mx-auto px-8 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 border border-boom-gold text-boom-gold text-[10px] tracking-[0.3em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/20">
            A Literary Revolution
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-medium leading-[0.85] mb-10 text-stone-900 drop-shadow-sm">
            El Boom <br/><span className="italic font-normal text-boom-earth text-4xl md:text-6xl block mt-6">Latinoamericano</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-stone-600 font-light leading-relaxed mb-16 italic">
            "We are the creators of a new reality."
          </p>
          
          <div className="flex justify-center">
             <a href="#introduction" onClick={scrollToSection('introduction')} className="group flex flex-col items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors cursor-pointer uppercase">
                <span>Begin the Journey</span>
                <span className="p-3 border border-stone-200 rounded-full group-hover:border-boom-gold transition-all bg-white/30 group-hover:bg-boom-gold group-hover:text-white">
                    <ArrowDown size={18} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Introduction */}
        <section id="introduction" className="py-32 bg-white">
          <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
            <div className="md:col-span-5">
              <div className="inline-block mb-4 text-[10px] font-bold tracking-[0.3em] text-boom-gold uppercase">The Movement</div>
              <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight text-stone-900 italic">A Continent <br/>Finding Its Voice</h2>
              <div className="w-24 h-1 bg-boom-earth mb-8 opacity-30"></div>
              <p className="text-stone-500 font-body italic text-lg">
                "Latin America is not a remote corner of the world. It is the center of a new imagination."
              </p>
            </div>
            <div className="md:col-span-7 text-xl text-stone-600 leading-relaxed space-y-8 font-body">
              <p>
                <span className="text-7xl float-left mr-4 mt-[-8px] font-serif text-boom-gold">I</span>n the 1960s and 70s, a group of young Latin American novelists burst onto the world stage, transforming literature forever. This was not just a collection of books; it was a cultural explosion that bridged the gap between the local and the universal.
              </p>
              <p>
                Through <strong className="text-stone-900 font-bold">Magical Realism</strong>, nonlinear time, and bold political critique, authors like García Márquez, Cortázar, and Vargas Llosa reimagined the identity of a continent. They proved that the reality of Latin America—with its myths, its violence, and its beauty—was as epic as any classical tragedy.
              </p>
            </div>
          </div>
        </section>

        {/* Concepts: Magical Realism */}
        <section id="concepts" className="py-32 bg-boom-cream border-t border-stone-100">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-boom-earth text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-8 border border-stone-100 shadow-sm">
                            <Feather size={14}/> THE CORE CONCEPT
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl mb-8 text-stone-900 italic">Magical Realism</h2>
                        <p className="text-xl text-stone-600 mb-8 leading-relaxed font-body">
                           In the world of the Boom, the fantastic is not an escape from reality; it is a deeper way of seeing it. Ghosts walk among the living, and miracles are reported with the same dry tone as the morning news.
                        </p>
                        <p className="text-xl text-stone-600 mb-8 leading-relaxed font-body">
                            This technique allowed authors to capture the surreal nature of Latin American history—a history where the impossible often becomes the inevitable.
                        </p>
                    </div>
                    <div>
                        <MagicalRealismVisual />
                    </div>
                </div>
            </div>
        </section>

        {/* History: Timeline */}
        <section id="history" className="py-32 bg-boom-ink text-boom-cream overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="w-[40rem] h-[40rem] rounded-full bg-boom-gold blur-[150px] absolute top-[-200px] left-[-200px]"></div>
                <div className="w-[40rem] h-[40rem] rounded-full bg-boom-earth blur-[150px] absolute bottom-[-200px] right-[-200px]"></div>
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                     <div className="order-2 lg:order-1">
                        <BoomTimeline />
                     </div>
                     <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-800 text-boom-gold text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-8 border border-stone-700">
                            <History size={14}/> THE ERA
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl mb-8 text-white italic">A Decade of Change</h2>
                        <p className="text-xl text-stone-400 mb-8 leading-relaxed font-body">
                            The Boom was fueled by the political turbulence of the Cold War and the Cuban Revolution. It was a time of immense hope and profound tragedy, reflected in the shifting perspectives of its narrators.
                        </p>
                        <p className="text-xl text-stone-400 leading-relaxed font-body">
                            Authors experimented with structure, forcing the reader to become an active participant in the creation of meaning, mirroring the fragmented identity of the continent itself.
                        </p>
                     </div>
                </div>
            </div>
        </section>

        {/* Geography: Map */}
        <section className="py-32 bg-white">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-boom-cream text-boom-earth text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-8 border border-stone-100 shadow-sm">
                            <Globe size={14}/> THE GEOGRAPHY
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl mb-8 text-stone-900 italic">Crossing Borders</h2>
                        <p className="text-xl text-stone-600 mb-8 leading-relaxed font-body">
                            While the authors came from different nations—Mexico, Colombia, Peru, Argentina—they shared a common language and a common struggle for identity.
                        </p>
                        <p className="text-xl text-stone-600 leading-relaxed font-body">
                            The Boom was the first time Latin American literature was marketed as a unified movement, thanks in large part to the publishing houses in Barcelona and Mexico City.
                        </p>
                    </div>
                    <div>
                        <AuthorMap />
                    </div>
                </div>
            </div>
        </section>

        {/* Authors Section */}
        <section id="authors" className="py-32 bg-boom-cream">
          <div className="container mx-auto px-8 text-center mb-20">
            <div className="inline-block mb-4 text-[10px] font-bold tracking-[0.3em] text-boom-gold uppercase">The Masters</div>
            <h2 className="font-serif text-5xl md:text-7xl mb-6 italic text-stone-900">The Architects of the Boom</h2>
            <p className="max-w-2xl mx-auto text-stone-500 font-body text-lg italic">
              "To write is to create a world where everything is possible."
            </p>
          </div>
          
          <div className="container mx-auto px-8 flex flex-wrap justify-center gap-12">
            <AuthorCard name="García Márquez" role="The Magician of Macondo" delay="0.1s" />
            <AuthorCard name="Julio Cortázar" role="The Master of Games" delay="0.2s" />
            <AuthorCard name="Vargas Llosa" role="The Political Chronicler" delay="0.3s" />
            <AuthorCard name="Carlos Fuentes" role="The Guardian of History" delay="0.4s" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-boom-earth text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <AuthorScene />
            </div>
            <div className="container mx-auto px-8 relative z-10">
                <h2 className="font-serif text-5xl md:text-7xl mb-10 italic">Rediscover the Classics</h2>
                <p className="max-w-2xl mx-auto text-xl mb-12 font-body opacity-90">
                    The Boom was not just a moment in time; it is a living legacy that continues to inspire writers and readers across the globe.
                </p>
                <a 
                  href="https://www.britannica.com/art/Latin-American-literature/The-Boom" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-5 bg-white text-boom-earth rounded-full font-bold tracking-widest uppercase hover:bg-stone-100 transition-all shadow-xl hover:scale-105"
                >
                  Read More
                </a>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 bg-boom-ink text-stone-500 border-t border-stone-800">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 font-serif font-bold text-lg">B</div>
            <span className="font-serif text-lg tracking-widest text-stone-300 italic">EL BOOM</span>
          </div>
          
          <div className="flex gap-10 text-[10px] font-bold tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-boom-gold transition-colors">Archive</a>
            <a href="#" className="hover:text-boom-gold transition-colors">Bibliography</a>
            <a href="#" className="hover:text-boom-gold transition-colors">Contact</a>
          </div>
          
          <div className="text-[10px] tracking-widest uppercase opacity-50">
            © 2024 • A Literary Exploration
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
