import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { cleanSubtitles } from "./utils"; // Importation depuis utils.ts
import { NextApiRequest, NextApiResponse } from "next";

// Fonction pour télécharger les sous-titres avec yt-dlp
export const downloadSubtitles = async (videoUrl: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Définir le chemin du fichier de sous-titres
    const outputPath = path.join(process.cwd(), "subtitles.vtt");

    // Commande yt-dlp pour télécharger les sous-titres
    const command = `yt-dlp --write-auto-sub --sub-lang fr --skip-download --output "${outputPath}" ${videoUrl}`;

    exec(command, (error, _, stderr) => {
      // Remplacer 'stdout' par '_'
      if (error || stderr) {
        console.error("Erreur lors de l'exécution de yt-dlp:", error || stderr);
        reject("Erreur lors du téléchargement des sous-titres");
        return;
      }

      // Vérifier si le fichier de sous-titres a été téléchargé avec succès
      if (fs.existsSync(outputPath)) {
        console.log("Sous-titres téléchargés avec succès :", outputPath);
        resolve(outputPath); // Retourner le chemin du fichier des sous-titres
      } else {
        reject("Fichier de sous-titres non trouvé");
      }
    });
  });
};

// Point d'entrée de l'API
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const videoUrl = req.body.videoUrl;

    if (!videoUrl) {
      return res.status(400).json({ error: "URL de vidéo manquante" });
    }

    // Étape 1 : Télécharger les sous-titres
    const subtitlesFilePath = await downloadSubtitles(videoUrl);

    // Étape 2 : Nettoyer les sous-titres (enlever horodatage, etc.)
    const cleanedFilePath = cleanSubtitles(subtitlesFilePath); // Nettoyage des sous-titres

    // Étape 3 : Générer le résumé
    const summaryResponse = await fetch("your-api-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filePath: cleanedFilePath }),
    });

    if (!summaryResponse.ok) {
      console.error("Failed to fetch summary:", summaryResponse.statusText);
      return res.status(500).json({ error: "Failed to fetch summary" });
    }

    const summaryData = await summaryResponse.json();
    return res.status(200).json({
      message: "Sous-titres nettoyés et résumé généré avec succès",
      data: summaryData,
    });
  } catch (error) {
    console.error("Erreur dans l'exécution de la commande yt-dlp:", error);
    return res
      .status(500)
      .json({ error: "Erreur de traitement des sous-titres" });
  }
}
