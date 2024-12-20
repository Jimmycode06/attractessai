// app/video/page.js
"use client"; // Indique que ce fichier utilise React (côté client)

import { useState } from "react";

// Assure-toi que cette fonction 'getCaptions' est bien définie dans ton API
import getCaptions from "../api/youtube/getCaptions";

export default function VideoPage() {
  const [videoId, setVideoId] = useState(""); // L'ID de la vidéo à entrer par l'utilisateur
  const [captions, setCaptions] = useState(null); // Pour stocker les sous-titres récupérés
  const [accessToken, setAccessToken] = useState(""); // Le token d'accès obtenu via OAuth

  const handleGetCaptions = async () => {
    // Appel à la fonction getCaptions pour obtenir les sous-titres
    const data = await getCaptions(videoId, accessToken);
    setCaptions(data);
  };

  return (
    <div>
      <h1>Obtenir les sous-titres d'une vidéo YouTube</h1>

      <input
        type="text"
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)} // Récupérer l'ID de vidéo de l'utilisateur
        placeholder="Entrez l'ID de la vidéo"
      />
      <button onClick={handleGetCaptions}>Obtenir les sous-titres</button>

      {captions && (
        <div>
          <h2>Sous-titres :</h2>
          <pre>{JSON.stringify(captions, null, 2)}</pre>{" "}
          {/* Afficher les sous-titres récupérés */}
        </div>
      )}
    </div>
  );
}
