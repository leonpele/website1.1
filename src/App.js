import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjetsPage from "./ProjetsPage";
import PrestationsPage from "./PrestationsPage";
import AProposPage from "./AProposPage";
import ContactPage from "./ContactPage";
import logo from './main_logo_margaux.png';
import logo1 from './logo_1_margaux.png';
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
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur z-50 shadow-sm h-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-full">
        <div className="flex items-center gap-2 h-full">
          <img src={logo} alt="Logo Margaux" className="max-h-full h-auto w-auto" />
          <Link to="/" className="flex flex-col justify-center text-2xl font-bold tracking-tight text-gray-800 hover:text-beige-700 transition-colors">
            MARGAUX COGREL
            <span className="text-base font-normal leading-none -mt-1 tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>architecte d'intérieur</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase">
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
            <Link to="/projets" className="px-4 py-2 hover:bg-beige-100 uppercase text-sm font-medium" onClick={() => setMenuOpen(false)}>PROJETS</Link>
            <Link to="/prestations" className="px-4 py-2 hover:bg-beige-100 uppercase text-sm font-medium" onClick={() => setMenuOpen(false)}>PRESTATIONS</Link>
            <Link to="/a-propos" className="px-4 py-2 hover:bg-beige-100 uppercase text-sm font-medium" onClick={() => setMenuOpen(false)}>À PROPOS</Link>
            <Link to="/contact" className="px-4 py-2 hover:bg-beige-100 uppercase text-sm font-medium" onClick={() => setMenuOpen(false)}>CONTACT</Link>
          </div>
        )}
      </div>
    </header>
  );
}

function Carousel() {
  return (
    <div
      className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden select-none"
    >
      <div
        className="w-full h-full flex flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide min-w-full"
        style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.url || img}
            alt={img.caption || `photo ${idx + 1}`}
            className="w-full h-full object-cover object-center flex-shrink-0 snap-center"
            draggable="false"
            style={{ minWidth: '100%' }}
          />
        ))}
      </div>
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
                className="w-full h-64 object-cover object-center"
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
        </Routes>
        <footer className="mt-24 pb-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={logo1} alt="Logo Margaux 1" className="h-8 w-auto mb-1" />
            <div className="text-center text-xs text-gray-400 tracking-wide mb-2">
            © 2025 - MARGAUX COGREL - architecte d'intérieur
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
