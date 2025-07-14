import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjetsPage from "./ProjetsPage";
import PrestationsPage from "./PrestationsPage";
import AProposPage from "./AProposPage";
import ContactPage from "./ContactPage";
import Principale1_1 from "./Principale1_1";
import Principale2 from "./Principale2";
import logo from './logo.svg';
import './App.css';

const images = [
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    caption: "Salon contemporain - Projet Paris 2023",
  },
  {
    url: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    caption: "Cuisine lumineuse - Rénovation Lyon",
  },
  {
    url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    caption: "Espace de travail - Aménagement Bordeaux",
  },
  {
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    caption: "Chambre minimaliste - Projet Marseille",
  },
];

const projets = [
  {
    titre: "Rénovation d’un loft ",
    date: "2024",
    description: "Transformation complète d’un loft industriel en espace de vie chaleureux et lumineux, avec des matériaux naturels et des lignes épurées.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    titre: "Cuisine contemporaine",
    date: "2023",
    description: "Création d’une cuisine ouverte, moderne et fonctionnelle, intégrant des rangements sur-mesure et un îlot central convivial.",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
  },
  {
    titre: "Bureau minimaliste ",
    date: "2022",
    description: "Aménagement d’un espace de travail inspirant, favorisant la concentration et la créativité grâce à une palette douce et des formes simples.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold tracking-tight text-gray-800 hover:text-beige-700 transition-colors">
            Margaux COGREL
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <Link to="/projets" className="hover:text-beige-700 transition-colors">Projets</Link>
          <Link to="/prestations" className="hover:text-beige-700 transition-colors">Prestations</Link>
          <Link to="/a-propos" className="hover:text-beige-700 transition-colors">À propos</Link>
          <Link to="/contact" className="hover:text-beige-700 transition-colors">Contact</Link>
        </nav>
        {/* Burger menu */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
          <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
          <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
        </button>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 w-48 bg-white rounded shadow-lg flex flex-col py-2 md:hidden animate-fade-in">
            <Link to="/projets" className="px-4 py-2 hover:bg-beige-100" onClick={() => setMenuOpen(false)}>Projets</Link>
            <Link to="/prestations" className="px-4 py-2 hover:bg-beige-100" onClick={() => setMenuOpen(false)}>Prestations</Link>
            <Link to="/a-propos" className="px-4 py-2 hover:bg-beige-100" onClick={() => setMenuOpen(false)}>À propos</Link>
            <Link to="/contact" className="px-4 py-2 hover:bg-beige-100" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}

function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="relative w-full max-w-xl mx-auto mt-10 md:mt-16 flex items-center justify-center">
      {/* Image principale */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={images[current].url || images[current]}
          alt={images[current].caption || `photo ${current + 1}`}
          className="w-full h-72 md:h-[420px] object-cover object-center"
          draggable="false"
        />
      </div>
      {/* Flèches navigation */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-beige-100 rounded-full p-2 shadow"
        onClick={prev}
        aria-label="Image précédente"
        style={{ left: '-2.5rem' }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-beige-100 rounded-full p-2 shadow"
        onClick={next}
        aria-label="Image suivante"
        style={{ right: '-2.5rem' }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  );
}

function Projets() {
  return (
    <section id="projets" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 tracking-tight">Projets récents</h2>
      <div className="flex flex-col gap-20">
        {projets.map((projet, idx) => (
          <div
            key={projet.titre}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
              idx % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-1/2 w-full">
              <img
                src={projet.image}
                alt={projet.titre}
                className="rounded-xl shadow-lg w-full h-64 object-cover object-center"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <div className="text-beige-700 text-sm font-semibold mb-2">{projet.date}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{projet.titre}</h3>
              <p className="text-gray-600">{projet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="pt-5 md:pt-14 flex-1">
      <Carousel />
      {/* <Projets /> */}
      {/* Ajoute ici d'autres sections (Prestations, etc.) */}
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<ProjetsPage />} />
          <Route path="/prestations" element={<PrestationsPage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/principale1-1" element={<Principale1_1 />} />
          <Route path="/principale2" element={<Principale2 />} />
        </Routes>
        <footer className="mt-24 pb-8">
          <div className="text-center text-xs text-gray-400 tracking-wide mb-2">
            2025 - Margaux COGREL - architecte d'intérieur
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <Link to="/principale1-1" className="underline hover:text-beige-700">Principale 1.1</Link>
            <Link to="/principale2" className="underline hover:text-beige-700">Principale 2</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
