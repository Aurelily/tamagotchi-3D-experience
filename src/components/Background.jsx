import { useTamagotchiStore } from "../store";
import "../style.css"; // Importation des styles CSS

export default function Background() {
  const bgUrl = useTamagotchiStore((state) => state.bgUrl); // Récupération depuis Zustand

  return (
    <div className="background" style={{
      backgroundImage: `url(${bgUrl})`, // Utilisation en background-image
      backgroundRepeat: "repeat",
      backgroundSize: "auto",
      backgroundPositionX: "left",
      backgroundPositionY: "top",
    }}>
      {/* Fin Background */}
    </div>
  );
}
