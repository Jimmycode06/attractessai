"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { BackgroundGradient } from "@/components/ui/background-gradient"; // Import du nouveau design

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bitcoinPrice, setBitcoinPrice] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true); // État pour gérer le mode
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs API

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
        );
        if (!response.ok) {
          throw new Error("Problème avec la récupération des données.");
        }
        const data = await response.json();
        setBitcoinPrice(data.bpi.USD.rate); // Récupérer le prix en USD
        setError(null); // Réinitialiser l'erreur si la récupération est réussie
      } catch (error: any) {
        setError("Erreur lors de la récupération du prix du Bitcoin.");
        console.error(
          "Erreur lors de la récupération du prix du Bitcoin :",
          error
        );
      }
    };

    fetchBitcoinPrice();
    const intervalId = setInterval(fetchBitcoinPrice, 30000);
    return () => clearInterval(intervalId);
  }, []);

  const tooltipItems = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image: "/images/john.webp",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Product Manager",
      image: "/images/jane.webp",
    },
  ];

  const airdropData = [
    {
      name: "OpenLayer",
      description:
        "Participez à l'airdrop OpenLayer et maximisez vos chances de recevoir des tokens en utilisant l'extension Chrome !",
      image: "/images/OpenLayer.png", // Logo OpenLayer
      link: "/openlayer",
    },
    {
      name: "Magic Eden",
      description:
        "Participez à l'airdrop Magic Eden pour découvrir des NFT et des collections exclusives !",
      image: "/images/magiceden.jpg", // Logo Magic Eden
      link: "/magiceden",
    },
    {
      name: "TokenX",
      description:
        "Participez à l'airdrop TokenX et obtenez des tokens gratuits à utiliser sur la plateforme !",
      image: "/images/tokenx.jpg", // Logo TokenX
      link: "/tokenx",
    },
    {
      name: "CryptoWave",
      description:
        "Rejoignez l'airdrop CryptoWave et obtenez des tokens pour votre portefeuille crypto !",
      image: "/images/cryptowave.jpg", // Logo CryptoWave
      link: "/cryptowave",
    },
    {
      name: "NFT Galaxy",
      description:
        "Inscrivez-vous à l'airdrop NFT Galaxy et explorez des NFT rares et des avantages exclusifs !",
      image: "/images/nftgalaxy.jpg", // Logo NFT Galaxy
      link: "/nftgalaxy",
    },
  ];

  // Filtrage des airdrops en fonction du terme de recherche
  const filteredAirdrops = airdropData.filter((airdrop) =>
    airdrop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen font-sans ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <main className="container mx-auto p-8">
        <header className="flex justify-between items-center mb-16">
          <div className="text-center md:text-left">
            <h1
              className={`text-4xl font-bold text-transparent bg-clip-text ${
                isDarkMode
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600"
                  : "bg-gradient-to-r from-indigo-700 to-purple-800"
              }`}
            >
              🚀 Découvrez les Derniers Airdrops ! 🎉
            </h1>
            <p
              className={`mt-4 text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Parcourez les opportunités de airdrops à venir et découvrez
              comment participer.
            </p>
          </div>

          {/* Barre de recherche */}
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className={`px-4 py-2 rounded-lg border ${
                isDarkMode
                  ? "border-gray-700 bg-black text-white"
                  : "border-gray-300 bg-white text-black"
              } shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Met à jour l'état
            />
            <span
              className={`absolute top-1/2 right-3 transform -translate-y-1/2 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              🔍
            </span>
          </div>
        </header>

        <div className="flex items-center mb-8">
          <img
            src="/images/bitcoin.svg"
            alt="Bitcoin"
            className="w-16 h-16 mr-4"
          />
          <div
            className="text-lg font-semibold"
            style={{ color: isDarkMode ? "#00b22d" : "#008c1d" }}
          >
            {error ? (
              <span className="text-red-500">{error}</span> // Affichage de l'erreur
            ) : bitcoinPrice ? (
              <span>${bitcoinPrice}</span>
            ) : (
              <span>Chargement du prix...</span>
            )}
          </div>
        </div>

        {/* Affichage des airdrops filtrés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAirdrops.map((airdrop, index) => (
            <Link key={index} href={airdrop.link} className="relative group">
              <BackgroundGradient containerClassName="rounded-[8px] p-2 transition-all transform hover:scale-105">
                <div
                  className={`flex flex-col items-center text-center ${
                    isDarkMode
                      ? "bg-black bg-opacity-90"
                      : "bg-white bg-opacity-90"
                  } rounded-[8px] p-4 shadow-md`}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={airdrop.image}
                      alt={airdrop.name}
                      className="w-10 h-10 mr-4 object-cover"
                    />
                    <div className="text-left">
                      <h2 className="text-xl font-bold mb-2">{airdrop.name}</h2>
                      <p
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {airdrop.description}
                      </p>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </Link>
          ))}
        </div>
      </main>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <EvervaultCard text="Attract" size="large" />
      </div>

      <div className="absolute bottom-8 right-8 flex space-x-8">
        <AnimatedTooltip items={tooltipItems} />
      </div>

      {/* Bouton de changement de mode */}
      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        className={`fixed bottom-4 left-4 px-4 py-2 rounded-lg shadow-md ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {isDarkMode ? "🌞 Mode Clair" : "🌙 Mode Sombre"}
      </button>
    </div>
  );
}
