import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
} from "react-icons/si"; // Import des icônes de cartes
import { ShootingStars } from "@/components/ui/shooting-stars"; // Import des étoiles filantes
import { StarsBackground } from "@/components/ui/stars-background"; // Import du fond étoilé

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-0 relative">
      {/* Ajout des étoiles et fond en arrière-plan */}
      <StarsBackground />
      <ShootingStars className="absolute inset-0 z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section de navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Attract</h3>
            <ul>
              <li>
                <Link href="/about" className="hover:text-gray-400">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-400">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section réseaux sociaux */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Section Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Inscris-toi pour recevoir nos dernières mises à jour.
            </p>
            <form>
              <input
                type="email"
                placeholder="Entrez votre email"
                className="p-2 bg-gray-200 text-gray-800 rounded-md w-full"
              />
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
              >
                S'inscrire
              </button>
            </form>
          </div>

          {/* Section copyright */}
          <div className="col-span-full sm:col-span-2 lg:col-span-1">
            <p className="text-center text-sm text-gray-400 mt-8 sm:mt-0">
              © {new Date().getFullYear()} Attract. Tous droits réservés.
            </p>
          </div>
        </div>

        {/* Section des logos de cartes de crédit */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Nous acceptons</h3>
          <div className="flex space-x-8">
            {/* Icônes des cartes de crédit, petites et alignées à gauche */}
            <SiVisa size={30} className="text-blue-600 hover:text-gray-400" />
            <SiMastercard
              size={30}
              className="text-red-600 hover:text-gray-400"
            />
            <SiAmericanexpress
              size={30}
              className="text-blue-700 hover:text-gray-400"
            />
            <SiPaypal size={30} className="text-blue-500 hover:text-gray-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
