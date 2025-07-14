import React from "react";

const projets = [
  {
    titre: "Rénovation d’un loft à Paris",
    date: "2024",
    description: "Transformation complète d’un loft industriel en espace de vie chaleureux et lumineux, avec des matériaux naturels et des lignes épurées.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    titre: "Cuisine contemporaine à Lyon",
    date: "2023",
    description: "Création d’une cuisine ouverte, moderne et fonctionnelle, intégrant des rangements sur-mesure et un îlot central convivial.",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
  },
  {
    titre: "Bureau minimaliste à Bordeaux",
    date: "2022",
    description: "Aménagement d’un espace de travail inspirant, favorisant la concentration et la créativité grâce à une palette douce et des formes simples.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProjetsPage() {
  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">Projets</h1>
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
                <h2 className="text-2xl font-bold mb-3 text-gray-800">{projet.titre}</h2>
                <p className="text-gray-600">{projet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 