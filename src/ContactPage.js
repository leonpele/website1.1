import React from "react";

export default function ContactPage() {
  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <section className="max-w-md mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 tracking-tight">Contact</h1>
        {/* Réseaux sociaux en avant */}
        <div className="flex flex-col items-center mb-10">
          <span className="text-gray-700 text-base font-semibold mb-3">Retrouvez-moi sur :</span>
          <div className="flex gap-8 mb-2">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-beige-700 text-gray-500 transition-colors">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="2"/><circle cx="12" cy="12" r="4" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-beige-700 text-gray-500 transition-colors">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/><path d="M7 10v6" strokeWidth="2" strokeLinecap="round"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/><path d="M11 10v6m0-6h2.5a2.5 2.5 0 012.5 2.5V16" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
            <a href="mailto:margaux.cogral@email.com" aria-label="Email" className="hover:text-beige-700 text-gray-500 transition-colors">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="3" strokeWidth="2"/><path d="M3 7l9 6 9-6" strokeWidth="2"/></svg>
            </a>
          </div>
        </div>
        <p className="text-gray-700 text-center mb-8">Ou envoyez-moi un message :</p>
        <form className="flex flex-col gap-6 bg-white rounded-xl shadow p-8">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
            <input type="text" id="nom" name="nom" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-beige-300" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-beige-300" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-beige-300"></textarea>
          </div>
          <button type="submit" className="bg-beige-700 text-white font-semibold rounded px-6 py-2 hover:bg-beige-800 transition-colors">Envoyer</button>
        </form>
      </section>
    </main>
  );
} 