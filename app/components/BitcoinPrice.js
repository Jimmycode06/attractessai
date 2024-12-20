import { useEffect, useState } from "react";

const BitcoinPrice = () => {
  const [price, setPrice] = useState(null); // `price` est initialisé à `null`
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour récupérer le prix du Bitcoin
  const fetchBitcoinPrice = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      const data = await response.json();
      setPrice(data.bitcoin.usd); // Met à jour le prix du Bitcoin
      setLoading(false);
    } catch (error) {
      setError("Impossible de récupérer le prix du Bitcoin.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBitcoinPrice();
    const interval = setInterval(fetchBitcoinPrice, 60000); // Mise à jour toutes les 60 secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
  }, []);

  return (
    <div className="bitcoin-price p-4 bg-gray-800 text-white rounded-lg shadow-md">
      {loading && <p>Chargement du prix...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {price !== null && ( // Affiche le prix seulement si `price` n'est pas `null`
        <p className="text-xl font-semibold">
          💰 Le prix actuel du Bitcoin :{" "}
          <span className="text-green-500">${price.toFixed(2)}</span>{" "}
          {/* Affiche avec 2 décimales */}
        </p>
      )}
    </div>
  );
};

export default BitcoinPrice;
