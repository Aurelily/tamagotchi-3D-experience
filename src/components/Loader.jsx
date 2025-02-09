import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { active, progress } = useProgress(); // Suivi du chargement

  return active ? (
    <Html center>
      <div style={{ width: "200px", textAlign: "center" }}>
        <span>Loading...</span>
        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#ffcc00", // Couleur de fond de la barre
            borderRadius: "5px",
            overflow: "hidden",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              width: `${progress}%`, // Remplissage de la barre de progression
              height: "100%",
              background: "rgb(247, 0, 255)", // Couleur de remplissage (rose)
              transition: "width 0.3s ease-out",
            }}
          />
        </div>
        <span>{Math.round(progress)}%</span> {/* Affiche le pourcentage */}
      </div>
    </Html>
  ) : null;
}
