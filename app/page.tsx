// app/page.tsx

"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter(); // Utilise le hook useRouter de Next.js pour gérer la navigation

  const handleCreateVideoClick = () => {
    // Redirection vers la page de login
    router.push("/login");
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-white text-center py-20">
        <p className="text-5xl font-extrabold text-black max-w-4xl mx-auto mb-8 font-poppins">
          Créer des vidéos virales avec l'IA
        </p>
        <button
          onClick={handleCreateVideoClick} // Appel de la fonction pour la redirection vers la page de login
          className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:from-purple-600 hover:to-indigo-500 transition-all"
        >
          Créer ma vidéo
        </button>
      </section>

      {/* Vidéos Avant / Après Section */}
      <section className="py-16 bg-white text-center">
        <div className="flex justify-center gap-[180px]">
          {/* Première vidéo */}
          <div
            style={{
              width: "295px",
              height: "590px", // Hauteur ajustée
              maxWidth: "100%",
              objectFit: "cover",
              overflow: "hidden",
              borderRadius: "16px", // Bords arrondis du conteneur
            }}
          >
            <video
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px", // Bords arrondis sur la vidéo
                objectFit: "cover", // Assure que la vidéo occupe tout l'espace du conteneur
              }}
              autoPlay
              loop
              muted
            >
              <source src="/videos/video-before.mp4" type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture des vidéos.
            </video>
          </div>

          {/* Deuxième vidéo */}
          <div
            style={{
              width: "295px",
              height: "590px", // Hauteur ajustée
              maxWidth: "100%",
              objectFit: "cover",
              overflow: "hidden",
              borderRadius: "16px", // Bords arrondis du conteneur
            }}
          >
            <video
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px", // Bords arrondis sur la vidéo
                objectFit: "cover", // Assure que la vidéo occupe tout l'espace du conteneur
              }}
              autoPlay
              loop
              muted
            >
              <source src="/videos/video-after.mp4" type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture des vidéos.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
