import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
];

export default function Principale1_1() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef();
  const delay = 3500;

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center mt-24">
      {/* Écran d'ordinateur agrandi */}
      <div className="relative flex flex-col items-center">
        <div className="relative w-[320px] h-[200px] md:w-[480px] md:h-[300px] bg-gray-200 rounded-2xl shadow-2xl border-4 border-gray-300 flex items-center justify-center overflow-hidden">
          {/* Carrousel dans l'écran */}
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={"carousel " + idx}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              draggable="false"
            />
          ))}
          {/* Navigation flèches */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-beige-100 rounded-full p-1 shadow"
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            aria-label="Image précédente"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-beige-100 rounded-full p-1 shadow"
            onClick={() => setCurrent((current + 1) % images.length)}
            aria-label="Image suivante"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
          {/* Points */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full border border-beige-400 ${idx === current ? "bg-beige-600" : "bg-white/80"}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Aller à l'image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Pied d'écran (style MacBook) */}
        <div className="w-32 h-4 bg-gray-300 rounded-b-xl mt-2 shadow-inner" />
      </div>
    </main>
  );
} 