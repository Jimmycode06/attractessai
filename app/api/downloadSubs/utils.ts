// utils.ts
import fs from "fs";

// Fonction pour nettoyer les sous-titres (exemple qui enlève les horodatages)
export const cleanSubtitles = (filePath: string): string => {
  // Lire le fichier de sous-titres
  const subtitles = fs.readFileSync(filePath, "utf-8");

  // Utiliser une expression régulière pour supprimer les horodatages
  const cleanedSubtitles = subtitles.replace(
    /\d{2}:\d{2}:\d{2}.\d{3} --> \d{2}:\d{2}:\d{2}.\d{3}/g,
    ""
  );

  // Sauvegarder le fichier nettoyé avec un nouveau nom
  const cleanedFilePath = filePath.replace(".vtt", "_cleaned.vtt");
  fs.writeFileSync(cleanedFilePath, cleanedSubtitles);

  // Retourner le chemin du fichier nettoyé
  return cleanedFilePath;
};
