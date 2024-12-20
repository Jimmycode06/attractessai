"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleCreateVideoClick = () => {
    router.push("/blog"); // Redirection vers la page de blog
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-white text-center py-20 px-6 sm:px-12 lg:px-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
          Créez des Vidéos Shorts Virales avec des Sous-titres grâce à Attract !
          🚀
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
          🌍 Dans un monde où les vidéos courtes dominent les réseaux sociaux,
          captez l'attention en quelques secondes ! Attract transforme vos
          vidéos en shorts viraux prêts à être partagés. 🎥✨
        </p>
        <button
          onClick={handleCreateVideoClick}
          className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-6 py-3 rounded-lg text-xl font-semibold shadow-lg transition-all transform hover:scale-95"
        >
          Commencez dès aujourd'hui ! 🎉
        </button>
      </section>

      {/* Pourquoi les vidéos courtes sont-elles incontournables ? Section */}
      <section className="py-16 bg-white text-center px-6 sm:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-purple-600 mb-6">
          Pourquoi les vidéos courtes ? 📱
        </h2>
        <div className="max-w-4xl mx-auto text-left text-lg text-gray-700">
          <ul className="list-inside list-disc space-y-4">
            <li>
              👍 Taux d'engagement élevé : Les vidéos courtes captent rapidement
              l'attention !
            </li>
            <li>
              ⚡ Consommation rapide : Idéales pour les utilisateurs qui
              scrollent sans s'arrêter.
            </li>
            <li>
              📈 Meilleure portée organique : Les algorithmes adorent les vidéos
              captivantes et adaptées aux mobiles !
            </li>
          </ul>
        </div>
      </section>

      {/* Que fait Attract ? Section */}
      <section className="py-16 bg-white text-center px-6 sm:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-purple-600 mb-6">
          Que fait Attract ? 🧑‍💻
        </h2>
        <div className="max-w-4xl mx-auto text-left text-lg text-gray-700 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-purple-600">
              1. Transformation automatique 🎬
            </h3>
            <p>
              Téléchargez une vidéo, et notre outil identifie les meilleurs
              moments pour créer des clips courts !
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-600">
              2. Sous-titres dynamiques 💬
            </h3>
            <p>
              Ajoutez des sous-titres stylisés pour que vos vidéos soient
              percutantes, même sans le son !
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-600">
              3. Optimisation pour la viralité 🚀
            </h3>
            <p>
              Ajoutez des animations, effets visuels et adaptez le format aux
              plateformes pour booster votre visibilité !
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-600">
              4. Personnalisation en un clic ✨
            </h3>
            <p>
              Personnalisez vos vidéos : styles de texte, musique et même votre
              logo pour un résultat pro !
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-600">
              5. Export rapide ⏩
            </h3>
            <p>
              Une fois prêt, téléchargez et partagez votre vidéo en haute
              qualité directement !
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Attract ? Section */}
      <section className="py-16 bg-white text-center px-6 sm:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-purple-600 mb-6">
          Pourquoi Attract ? 🤔
        </h2>
        <div className="max-w-4xl mx-auto text-left text-lg text-gray-700">
          <ul className="list-inside list-disc space-y-4">
            <li>
              ⏱️ Gain de temps : Plus besoin de passer des heures à éditer,
              notre plateforme fait tout pour vous !
            </li>
            <li>
              🤖 Technologie avancée : L'IA détecte les meilleurs moments et
              synchronise les sous-titres à la perfection !
            </li>
            <li>
              🎬 Résultats pro : Créez des vidéos impressionnantes sans être un
              expert en montage vidéo !
            </li>
          </ul>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-16 bg-white text-center px-6 sm:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-purple-600 mb-6">
          Ce qu’en disent nos utilisateurs 😍
        </h2>
        <div className="max-w-4xl mx-auto text-left text-lg text-gray-700 space-y-6">
          <p>
            "Grâce à Attract, mes vidéos explosent sur TikTok ! Je ne pourrais
            plus m’en passer !" – Clara, coach en ligne.
          </p>
          <p>
            "Les sous-titres rendent mes vidéos beaucoup plus professionnelles.
            Plus de visibilité, plus de vues !" – Alex, entrepreneur.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-600 text-white text-center px-6 sm:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Prêt à booster votre contenu ? 💥
        </h2>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          Transformez vos vidéos en contenu viral avec Attract. Testez-le
          gratuitement et voyez par vous-même ! 🎉
        </p>
        <button
          onClick={handleCreateVideoClick}
          className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-6 py-3 rounded-lg text-xl font-semibold shadow-lg transition-all transform hover:scale-95"
        >
          Commencez dès aujourd'hui ! 🚀
        </button>
      </section>
    </div>
  );
}
