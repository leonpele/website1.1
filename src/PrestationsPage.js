import React from "react";

const prestations = [
  {
    titre: "Conseil en aménagement",
    description: "Analyse de vos besoins et propositions personnalisées pour optimiser vos espaces."
  },
  {
    titre: "Conception sur-mesure",
    description: "Plans, croquis et modélisations 3D pour visualiser votre futur intérieur."
  },
  {
    titre: "Suivi de chantier",
    description: "Coordination des artisans et suivi rigoureux de l’avancement des travaux."
  },
  {
    titre: "Décoration et mise en scène",
    description: "Sélection de mobilier, couleurs et accessoires pour une ambiance unique."
  },
];

export default function PrestationsPage() {
  return (
    <main className="pt-5 md:pt-10 flex-1">
      <section className="max-w-3xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">Prestations</h1>
        <ul className="flex flex-col gap-10">
          {prestations.map((presta) => (
            <li key={presta.titre} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold text-beige-700 mb-2">{presta.titre}</h2>
              <p className="text-gray-600">{presta.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
} 