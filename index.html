/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Map, Clock, Star, Users } from 'lucide-react';

// --- MAGICAL REALISM VISUAL ---
export const MagicalRealismVisual: React.FC = () => {
  const [active, setActive] = useState(0);
  
  const concepts = [
    { title: "The Ordinary", desc: "A simple house, a normal day, a quiet street.", color: "bg-stone-200" },
    { title: "The Fantastic", desc: "Yellow butterflies, levitating priests, ghosts in the kitchen.", color: "bg-boom-gold" },
    { title: "The Synthesis", desc: "Where the impossible is treated as mundane.", color: "bg-boom-earth" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(s => (s + 1) % concepts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-stone-100 my-8">
      <h3 className="font-serif text-2xl mb-4 text-stone-800 italic">Realismo Mágico</h3>
      <p className="text-sm text-stone-500 mb-8 text-center max-w-md font-body">
        The synthesis of the everyday and the fantastic.
      </p>
      
      <div className="relative w-full max-w-sm h-64 bg-boom-cream rounded-xl border border-stone-200 overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -10 }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className={`w-20 h-20 rounded-full ${concepts[active].color} mb-6 flex items-center justify-center shadow-inner`}>
              {active === 0 && <Book className="text-stone-600" size={32} />}
              {active === 1 && <Star className="text-white" size={32} />}
              {active === 2 && <Users className="text-white" size={32} />}
            </div>
            <h4 className="font-serif text-xl mb-2 text-stone-900">{concepts[active].title}</h4>
            <p className="text-sm text-stone-600 leading-relaxed font-body">{concepts[active].desc}</p>
          </motion.div>
        </AnimatePresence>
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 opacity-20"><Star size={16} /></div>
        <div className="absolute bottom-4 right-4 opacity-20"><Star size={16} /></div>
      </div>

      <div className="mt-8 flex gap-2">
        {concepts.map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? 'w-12 bg-boom-gold' : 'w-3 bg-stone-200'}`}></div>
        ))}
      </div>
    </div>
  );
};

// --- BOOM TIMELINE ---
export const BoomTimeline: React.FC = () => {
  const [selected, setSelected] = useState(0);
  
  const events = [
    { year: "1962", work: "La ciudad y los perros", author: "Mario Vargas Llosa", desc: "The spark that ignited the Boom." },
    { year: "1963", work: "Rayuela", author: "Julio Cortázar", desc: "A counter-novel that broke narrative structure." },
    { year: "1967", work: "Cien años de soledad", author: "Gabriel García Márquez", desc: "The definitive masterpiece of the era." },
    { year: "1970", work: "El obsceno pájaro de la noche", author: "José Donoso", desc: "A dark, labyrinthine exploration of identity." }
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-boom-ink text-boom-cream rounded-2xl my-8 border border-stone-800 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="text-boom-gold" size={20} />
        <h3 className="font-serif text-2xl italic">Chronology of the Boom</h3>
      </div>
      
      <div className="w-full max-w-2xl relative">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-stone-700 -translate-y-1/2"></div>
        
        <div className="flex justify-between relative z-10">
          {events.map((ev, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="flex flex-col items-center group"
            >
              <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${selected === i ? 'bg-boom-gold border-boom-gold scale-150' : 'bg-boom-ink border-stone-600 group-hover:border-stone-400'}`}></div>
              <span className={`mt-4 text-xs font-bold tracking-widest transition-colors ${selected === i ? 'text-boom-gold' : 'text-stone-500'}`}>{ev.year}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={selected}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 text-center max-w-md"
      >
        <h4 className="font-serif text-2xl mb-1 text-white">{events[selected].work}</h4>
        <p className="text-boom-gold text-sm uppercase tracking-widest font-bold mb-4">{events[selected].author}</p>
        <p className="text-stone-400 font-body leading-relaxed">{events[selected].desc}</p>
      </motion.div>
    </div>
  );
};

// --- AUTHOR MAP ---
export const AuthorMap: React.FC = () => {
  const authors = [
    { name: "Gabriel García Márquez", country: "Colombia", coords: { x: "40%", y: "45%" } },
    { name: "Julio Cortázar", country: "Argentina", coords: { x: "55%", y: "85%" } },
    { name: "Mario Vargas Llosa", country: "Peru", coords: { x: "35%", y: "65%" } },
    { name: "Carlos Fuentes", country: "Mexico", coords: { x: "20%", y: "35%" } },
    { name: "Juan Rulfo", country: "Mexico", coords: { x: "15%", y: "30%" } }
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-stone-100 my-8">
      <div className="flex items-center gap-3 mb-6">
        <Map className="text-boom-earth" size={20} />
        <h3 className="font-serif text-2xl italic text-stone-800">Geography of Influence</h3>
      </div>
      
      <div className="relative w-full max-w-md aspect-[3/4] bg-boom-cream rounded-xl border border-stone-200 overflow-hidden">
        {/* Simplified Map Outline (SVG) */}
        <svg viewBox="0 0 100 130" className="absolute inset-0 w-full h-full opacity-10 fill-stone-900">
           <path d="M20,20 Q40,10 60,30 T80,60 T70,100 T40,120 T10,80 Z" />
        </svg>

        {authors.map((author, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="absolute flex flex-col items-center group cursor-pointer"
            style={{ left: author.coords.x, top: author.coords.y }}
          >
            <div className="w-3 h-3 bg-boom-earth rounded-full shadow-sm group-hover:scale-150 transition-transform"></div>
            <div className="absolute top-4 bg-white/90 backdrop-blur-sm border border-stone-200 px-3 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
              <span className="text-[10px] font-bold text-stone-800">{author.name}</span>
              <span className="text-[8px] text-stone-500 block text-center uppercase tracking-tighter">{author.country}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <p className="mt-6 text-xs text-stone-400 font-body italic">
        The Boom was a continental movement, bridging borders through shared history and language.
      </p>
    </div>
  );
};
