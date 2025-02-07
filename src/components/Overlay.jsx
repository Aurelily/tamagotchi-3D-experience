import { useControlsStore } from "../store";

export default function Overlay() {
  const { autoRotate, toggleAutoRotate, setModelUrl } = useControlsStore();

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none", // Désactive les interactions globales
        width: "100%",
        height: "100%",
      }}
    >
      {/* Lien LinkedIn */}
      <a
        href="https://www.linkedin.com/in/aureliepreaud/"
        style={{
          position: "absolute",
          bottom: 30,
          left: 30,
          fontSize: "13px",
          pointerEvents: "auto", // Active les interactions sur le lien
        }}
      >
        <p>
          <b>Created by Aurelie PREAUD</b>
        </p>
        <p>
          I'm open for working on your 3D / ThreeJS project,
          <br />
          Contact me by LinkedIn
        </p>
        <img src="./linkedin.png" alt="linkedin" width={30} />
      </a>

      {/* Conteneur du menu */}
      <div className="menu-container" style={{ pointerEvents: "auto" }}> {/* ✅ Active les interactions ici */}
        <div className="configurator-bg">
          <img src="./logos/logo-mocha.png" alt="Tamagotchi" />
          <div className="buttons-container">
            <img
              src="./buttons/bt-mocha.png"
              alt="Mocha cat"
              onClick={() => setModelUrl("./models/Tamagotchi/tamagotchi-mocha.glb")}
              style={{ cursor: "pointer" }}
            />
            <img
              src="./buttons/bt-fruty.png"
              alt="Fruty ty"
              onClick={() => setModelUrl("./models/Tamagotchi/tamagotchi-frutyty.glb")}
              style={{ cursor: "pointer" }}
            />
            <img
              src="./buttons/bt-egg.png"
              alt="Egg Muffin"
              onClick={() => setModelUrl("./models/Tamagotchi/tamagotchi-egg.glb")}
              style={{ cursor: "pointer" }}
            />
            <img
              src="./buttons/bt-tea.png"
              alt="Green tea"
              onClick={() => setModelUrl("./models/Tamagotchi/tamagotchi-tea.glb")}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      {/* Bouton de contrôle de la rotation */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          background: "rgba(0, 0, 0, 0.7)",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
          pointerEvents: "auto", // ✅ Permet de cliquer sur le bouton
        }}
      >
        <button
          onClick={toggleAutoRotate}
          style={{
            padding: "10px",
            cursor: "pointer",
            background: "#ffcc00",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          {autoRotate ? "Désactiver Rotation" : "Activer Rotation"}
        </button>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          fontSize: "13px",
        }}
      >
        Blender3D - ThreeJS - R3F - 2024
      </div>
    </div>
  );
}
