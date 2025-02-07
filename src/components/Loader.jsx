import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { active, progress } = useProgress(); // Suivi du chargement

  return active ? (
    <Html center>
      <div style={{ width: "200px", textAlign: "center" }}>
        <span>Chargement...</span>
        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#ddd",
            borderRadius: "5px",
            overflow: "hidden",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#3498db",
              transition: "width 0.3s ease-out",
            }}
          />
        </div>
        <span>{Math.round(progress)}%</span>
      </div>
    </Html>
  ) : null;
}
