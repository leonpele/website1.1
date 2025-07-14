import React, { useState, useRef, useEffect } from "react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    citation: "L’architecture, c’est une tournure d’esprit et non un métier. — Le Corbusier"
  },
  {
    url: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    citation: "La simplicité est la clé de l’élégance. — Coco Chanel"
  },
  {
    url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    citation: "L’espace n’est rien sans la lumière. — Gaston Bachelard"
  },
  {
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    citation: "Le détail n’est pas un détail, il fait le design. — Charles Eames"
  },
];

export default function Principale2() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef();
  const delay = 3000;

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, delay);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center mt-5 md:mt-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        <div className="w-full max-w-xl h-60 md:h-80 aspect-[16/9] overflow-hidden bg-gray-100 flex items-center justify-center relative">
          {slides.map((slide, idx) => (
            <img
              key={idx}
              src={slide.url}
              alt={"carousel " + idx}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              draggable="false"
              style={{ pointerEvents: idx === current ? "auto" : "none" }}
            />
          ))}
        </div>
        <div className="md:w-64 w-full md:text-left text-center mt-6 md:mt-0">
          <span className="block text-black font-serif italic font-semibold text-base md:text-lg leading-snug tracking-wide">{slides[current].citation}</span>
        </div>
      </div>
      {/* Miniatures sous le carrousel */}
      <div className="flex gap-3 mt-8">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`border ${idx === current ? 'border-black border-2' : 'border-gray-300'} rounded w-16 h-12 overflow-hidden focus:outline-none focus:ring-2 focus:ring-beige-400 transition-all`}
            aria-label={`Voir la photo ${idx + 1}`}
            tabIndex={0}
          >
            <img
              src={slide.url}
              alt={"miniature " + idx}
              className="w-full h-full object-cover object-center"
              draggable="false"
            />
          </button>
        ))}
      </div>
    </main>
  );
} 