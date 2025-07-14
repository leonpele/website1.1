import React from "react";

export default function AProposPage() {
  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <section className="max-w-3xl mx-auto py-20 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 tracking-tight">À propos</h1>
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&q=80"
          alt="Portrait Margaux Cogral"
          className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg"
        />
        <p className="text-gray-700 text-center mb-6 max-w-xl">
          Architecte d’intérieur passionnée, j’accompagne mes clients dans la transformation de leurs espaces de vie et de travail. Mon approche allie écoute, créativité et rigueur pour concevoir des lieux uniques, fonctionnels et harmonieux.
        </p>
        <ul className="flex flex-wrap gap-4 justify-center text-sm text-beige-700 font-medium">
          <li>Écoute &amp; conseil</li>
          <li>Créativité</li>
          <li>Gestion de projet</li>
          <li>Respect des délais</li>
          <li>Suivi personnalisé</li>
        </ul>
      </section>
    </main>
  );
} 