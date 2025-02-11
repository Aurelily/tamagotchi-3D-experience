import { useTamagotchiStore } from "../store";
import "../style.css"; // Importation des styles CSS

export default function Overlay() {
  const { autoRotate, toggleAutoRotate, setTextures, logoUrl, setLogoUrl } =
    useTamagotchiStore();

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Lien LinkedIn */}
      <a
        href="https://www.linkedin.com/in/aureliepreaud/"
        className="linkedin-link"
        style={{
          position: "absolute",
          bottom: 30,
          left: 30,
          fontSize: "13px",
          pointerEvents: "auto",
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
      <div className="menu-container" style={{ pointerEvents: "auto" }}>
        <div className="configurator-bg">
          {/* ✅ Logo dynamique */}
          <img className="logo-dynamique" src={logoUrl} alt="Tamagotchi Logo" />

          <div className="buttons-container">
            <img
              src="./buttons/bt-mocha.png"
              alt="Mocha cat"
              onClick={() => {
                setTextures({
                  "uv-main": "./textures/mocha/main.png",
                  "uv-screen": "./textures/mocha/screen.png",
                  "uv-ring": "./textures/mocha/ring.png",
                  "uv-button1": "./textures/mocha/button1.png",
                  "uv-button2": "./textures/mocha/button2.png",
                  "uv-button3": "./textures/mocha/button3.png",
                });
                setLogoUrl("./logos/logo-mocha.png");
              }}
              className="theme-button"
            />
            <img
              src="./buttons/bt-fruty.png"
              alt="Fruty ty"
              onClick={() => {
                setTextures({
                  "uv-main": "./textures/fruty/main.png",
                  "uv-screen": "./textures/fruty/screen.png",
                  "uv-ring": "./textures/fruty/ring.png",
                  "uv-button1": "./textures/fruty/button1.png",
                  "uv-button2": "./textures/fruty/button2.png",
                  "uv-button3": "./textures/fruty/button3.png",
                });
                setLogoUrl("./logos/logo-fruty.png");
              }}
              className="theme-button"
            />
            <img
              src="./buttons/bt-egg.png"
              alt="Egg Muffin"
              onClick={() => {
                setTextures({
                  "uv-main": "./textures/egg/main.png",
                  "uv-screen": "./textures/egg/screen.png",
                  "uv-ring": "./textures/egg/ring.png",
                  "uv-button1": "./textures/egg/button1.png",
                  "uv-button2": "./textures/egg/button2.png",
                  "uv-button3": "./textures/egg/button3.png",
                });
                setLogoUrl("./logos/logo-eggs.png");
              }}
              className="theme-button"
            />
            <img
              src="./buttons/bt-tea.png"
              alt="Green tea"
              onClick={() => {
                setTextures({
                  "uv-main": "./textures/tea/main.png",
                  "uv-screen": "./textures/tea/screen.png",
                  "uv-ring": "./textures/tea/ring.png",
                  "uv-button1": "./textures/tea/button1.png",
                  "uv-button2": "./textures/tea/button2.png",
                  "uv-button3": "./textures/tea/button3.png",
                });
                setLogoUrl("./logos/logo-green.png");
              }}
              className="theme-button"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="footer"
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          fontSize: "13px",
        }}
      >
        Blender3D - ThreeJS - R3F - February 2025
      </div>
      <div
        className="footer"
        style={{
          position: "absolute",
          top: 30,
          right: 30,
          fontSize: "13px",
          textAlign: "center",
        }}
      >
        {/* Instructions pour l'utilisation de la souris */}
        <div className="mouse-info">
          <img src="./mouse.png" alt="Mouse" />
          <p>
            You can use your mouse to grab, zoom in
            <br />
            and manipulate the model!
          </p>
        </div>
      </div>

      {/* 🔄 Switch Toggle pour la rotation */}
      <div
        style={{
          width: "200px",
          marginTop: "2%",
          marginLeft: "8%",
          background: "rgb(247, 0, 255)",
          padding: "1%",
          borderRadius: "30px",
          color: "white",
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            fontFamily: "DynaPuff",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <span style={{ marginRight: "10px" }}>
            {autoRotate ? "Disable rotation" : "Enable rotation"}
          </span>

          {/* Switch Toggle */}
          <div
            onClick={toggleAutoRotate}
            style={{
              width: "50px",
              height: "25px",
              background: autoRotate ? "#ffcc00" : "#ccc",
              borderRadius: "20px",
              position: "relative",
              transition: "background 0.3s",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                background: "white",
                borderRadius: "50%",
                position: "absolute",
                top: "50%",
                left: autoRotate ? "26px" : "4px",
                transform: "translateY(-50%)",
                transition: "left 0.3s",
                boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
              }}
            />
          </div>
        </label>
      </div>
    </div>
  );
}
