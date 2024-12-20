"use client";

import React, { useState } from "react";

const VideoSummary = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cleanedFile, setCleanedFile] = useState<string | null>(null); // Ajout de l'état pour le fichier nettoyé

  const handleGetSummary = async () => {
    setLoading(true);
    setError(null);
    setSummary(null);

    if (!videoUrl) {
      setError("Veuillez entrer une URL valide");
      setLoading(false);
      return;
    }

    try {
      // Étape 1 : Récupérer les sous-titres
      const subtitlesResponse = await fetch("/api/downloadSubs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoUrl }),
      });

      if (!subtitlesResponse.ok)
        throw new Error("Erreur lors de la récupération des sous-titres");

      const subtitlesData = await subtitlesResponse.json();

      if (!subtitlesData.cleanedFilePath) {
        throw new Error("Sous-titres non trouvés pour cette vidéo");
      }

      // Afficher le chemin du fichier nettoyé
      setCleanedFile(subtitlesData.cleanedFilePath);

      // Étape 2 : Obtenir le résumé des sous-titres
      const summaryResponse = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subtitles: subtitlesData.cleanedFilePath }),
      });

      if (!summaryResponse.ok)
        throw new Error("Erreur lors de la génération du résumé");

      const summaryData = await summaryResponse.json();
      setSummary(summaryData.summary); // Afficher le résumé
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Obtenir le résumé d'une vidéo YouTube
        </h1>

        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Entrez l'URL de la vidéo YouTube"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <button
          onClick={handleGetSummary}
          className={`w-full py-2 px-4 rounded text-white ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Génération en cours..." : "Obtenir le résumé"}
        </button>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

        {summary && (
          <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Résumé :</h3>
            <p className="text-sm">{summary}</p>
          </div>
        )}

        {/* Affichage du fichier nettoyé */}
        {cleanedFile && (
          <div className="mt-6">
            <a
              href={cleanedFile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Télécharger les sous-titres nettoyés
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSummary;
