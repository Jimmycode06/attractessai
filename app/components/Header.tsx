import { SparklesCore } from "@/components/ui/sparkles"; // Assurez-vous que SparklesCore est correctement importé
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Header() {
  return (
    <header className="bg-black text-white py-2 shadow-md relative overflow-hidden">
      {/* Réduit le padding vertical */}
      {/* Ajout des étoiles et fond en arrière-plan */}
      <StarsBackground />
      <ShootingStars className="absolute inset-0 z-10" />
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-20">
        {/* Section du titre et animation Sparkles alignée à gauche */}
        <div className="flex items-center">
          {/* Remplacer le titre par l'animation Sparkles */}
          <div className="h-[12rem] w-full bg-black flex flex-col items-start justify-center overflow-hidden rounded-md ml-12">
            {" "}
            {/* Augmenter la marge ici */}
            {/* Réduit la hauteur */}
            <h1 className="md:text-3xl text-xl lg:text-4xl font-bold text-left text-white relative z-20">
              Attract
            </h1>
            <div className="w-[15rem] h-12 relative">
              {/* Réduit la largeur et la hauteur */}
              {/* Gradients - Réduction de la taille des bordures */}
              <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[0.5px] w-3/4 blur-sm" />
              <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-3/4" />
              <div className="absolute inset-x-48 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[0.5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-48 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[1px] w-1/4" />
              {/* Core component pour les étincelles */}
              <SparklesCore
                background="transparent"
                minSize={0.2} // Réduit la taille min des particules
                maxSize={0.5} // Réduit la taille max des particules
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center mt-[-2rem]">
          {/* Augmente la marge négative pour remonter davantage */}
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-yellow-400">
                Accueil
              </a>
            </li>
            <li>
              <a href="/features" className="text-white hover:text-yellow-400">
                Fonctionnalités
              </a>
            </li>
            <li>
              <a href="/pricing" className="text-white hover:text-yellow-400">
                Tarifs
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
