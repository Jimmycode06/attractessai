"use client";

import { useState } from "react";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SparklesCore } from "@/components/ui/sparkles";

export default function IntegrationPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const integrationData = [
    {
      name: "Youtube to X",
      logos: ["/images/youtube.png", "/images/x2.png"],
      description:
        "Mettez simplement un lien Youtube et obtenez un thread sur X !",
      link: "/youtube-to-x",
    },
    {
      name: "Youtube to Linkedin",
      logos: ["/images/youtube.png", "/images/linkedin.png"],
      description:
        "Partagez vos vidéos Youtube directement sur votre profil Linkedin pour maximiser votre audience.",
      link: "/youtube-to-linkedin",
    },
    {
      name: "Youtube to Newsletter",
      logos: ["/images/youtube.png", "/images/newsletter-logo.png"],
      description:
        "Envoyez automatiquement les vidéos de votre chaîne Youtube à vos abonnés de newsletter.",
      link: "/youtube-to-newsletter",
    },
    {
      name: "Youtube to Notion",
      logos: ["/images/youtube.png", "/images/notion-logo.png"],
      description:
        "Intégrez vos vidéos Youtube dans Notion pour les organiser et les partager facilement.",
      link: "/youtube-to-notion",
    },
  ];

  return (
    <div className="bg-black min-h-screen font-sans text-white">
      <main className="container mx-auto p-8">
        <header className="flex justify-between items-center mb-16">
          <div className="text-center md:text-left flex items-center">
            <img
              src="/images/youtube.png"
              alt="Logo YouTube"
              className="w-12 h-12 mr-4"
            />
            <h1 className="text-4xl font-bold text-white">
              De Youtube à votre réseau social préféré !
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <HoverBorderGradient containerClassName="mr-4">
              Mettre à niveau
            </HoverBorderGradient>

            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="px-4 py-2 rounded-lg border border-gray-700 bg-black text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {integrationData.map((integration) => (
            <Link
              key={integration.name}
              href={integration.link}
              className="relative group"
            >
              <BackgroundGradient containerClassName="rounded-[8px] p-2 transition-all transform hover:scale-105">
                <div className="flex flex-col items-center text-center bg-black bg-opacity-90 rounded-[8px] p-4 shadow-md">
                  <div className="flex items-center mb-4">
                    {(integration.logos || []).map((logo, i) => (
                      <img
                        key={i}
                        src={logo}
                        alt={integration.name}
                        className="w-16 h-16 mr-6 object-cover"
                      />
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {integration.name}
                  </h2>
                  <p className="text-gray-300">{integration.description}</p>
                </div>
              </BackgroundGradient>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
              Attract
            </h1>
            <div className="w-[40rem] h-40 relative">
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
