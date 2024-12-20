// app/about/page.tsx

import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-white text-center py-20">
        <p className="text-5xl font-extrabold text-black max-w-4xl mx-auto mb-8 font-poppins">
          À propos de notre entreprise
        </p>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Nous sommes une entreprise dédiée à créer des solutions innovantes en
          utilisant l'IA pour aider les entreprises à créer des vidéos
          percutantes et virales.
        </p>
        <a
          href="/contact"
          className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:from-purple-600 hover:to-indigo-500 transition-all"
        >
          Contactez-nous
        </a>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-semibold text-black mb-6">
          Notre mission
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Notre mission est de rendre la création de vidéos virales plus facile,
          rapide et accessible à tous. Nous utilisons des algorithmes de pointe
          pour aider nos clients à capter l'attention de leur public.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2024 Mon Entreprise. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
