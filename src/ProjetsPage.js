import React, { useState } from "react";

const projets = [
  {
    titre: "Rénovation d'un loft à Paris",
    date: "2024",
    description: "Transformation complète d'un loft industriel en espace de vie chaleureux et lumineux, avec des matériaux naturels et des lignes épurées.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    ],
    descriptionDetaillee: "Ce projet de rénovation d'un loft parisien de 120m² a nécessité une transformation complète de l'espace. Nous avons créé une pièce de vie ouverte avec une cuisine intégrée, trois chambres et deux salles de bain. Les matériaux naturels (bois, pierre, béton ciré) ont été privilégiés pour créer une ambiance chaleureuse et moderne. La lumière naturelle a été optimisée grâce à de grandes ouvertures et des cloisons vitrées."
  },
  {
    titre: "Cuisine contemporaine à Lyon",
    date: "2023",
    description: "Création d'une cuisine ouverte, moderne et fonctionnelle, intégrant des rangements sur-mesure et un îlot central convivial.",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
    ],
    descriptionDetaillee: "Cette cuisine de 25m² a été entièrement repensée pour créer un espace de vie convivial. L'îlot central de 3m de long sert à la fois de plan de travail et de bar de déjeuner. Les rangements sur-mesure incluent des tiroirs à couverts, un garde-manger tournant et des étagères coulissantes. Le plan de travail en granit et les meubles en chêne massif créent une ambiance chaleureuse et durable."
  },
  {
    titre: "Bureau minimaliste à Bordeaux",
    date: "2022",
    description: "Aménagement d'un espace de travail inspirant, favorisant la concentration et la créativité grâce à une palette douce et des formes simples.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    ],
    descriptionDetaillee: "Ce bureau de 40m² a été conçu pour un architecte qui souhaitait un espace de travail épuré et fonctionnel. L'espace est divisé en trois zones : une zone de travail avec un grand plan de travail, une zone de réunion avec un canapé et une table basse, et une zone de rangement avec des étagères modulaires. La palette de couleurs neutres (blanc, gris, beige) favorise la concentration et la créativité."
  },
];

export default function ProjetsPage() {
  const [projetSelectionne, setProjetSelectionne] = useState(null);

  const ouvrirProjet = (projet) => {
    setProjetSelectionne(projet);
  };

  const fermerProjet = () => {
    setProjetSelectionne(null);
  };

  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">Projets</h1>
        
        {/* Section détaillée du projet sélectionné */}
        {projetSelectionne && (
          <div className="mb-20 bg-white p-8 shadow-lg border border-gray-200">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{projetSelectionne.titre}</h2>
                <p className="text-beige-700 text-lg font-semibold">{projetSelectionne.date}</p>
              </div>
              <button
                onClick={fermerProjet}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold px-3 py-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {projetSelectionne.descriptionDetaillee}
            </p>
            
            {/* Galerie de photos du projet */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projetSelectionne.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`${projetSelectionne.titre} - Photo ${index + 1}`}
                  className="w-full h-64 object-cover object-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Liste des projets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projets.map((projet) => (
            <div 
              key={projet.titre} 
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => ouvrirProjet(projet)}
            >
              <img
                src={projet.image}
                alt={projet.titre}
                className="w-full h-80 object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl mb-4"
              />
              <div className="text-beige-700 text-sm font-semibold mb-1">{projet.date}</div>
              <h2 className="text-xl font-bold text-center text-gray-800">{projet.titre}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 