import { useTamagotchiStore } from "../store";
import { useState, useEffect } from "react";
import "../style.css"; // Importation des styles CSS

export default function Overlay() {
  const { autoRotate, toggleAutoRotate, setTheme, logoUrl } =
    useTamagotchiStore();

  const themes = ["mocha", "fruty", "egg", "tea"];
  const [hoveredTheme, setHoveredTheme] = useState(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audio] = useState(() => {
    const sound = new Audio("./sounds/music.mp3");
    sound.loop = true;
    return sound;
  });

  // Gestion du démarrage et de l'arrêt de la musique
  const toggleMusic = () => {
    if (isMusicPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  // Arrêter la musique si le composant est démonté
  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  return (
    <div className="overlay">
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
          <b>
            Created by Aurelie PREAUD for{" "}
            <a href="https://threejs-journey.com/" target="_blank">ThreeJs Journey's</a>{" "}
            Challenge
          </b>
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
          <img className="logo-dynamique" src={logoUrl} alt="Tamagotchi Logo" />

          <div className="buttons-container">
            {themes.map((theme) => (
              <img
                key={theme}
                src={`./buttons/bt-${
                  hoveredTheme === theme ? `${theme}-hover` : theme
                }.png`}
                alt={theme}
                onClick={() => setTheme(theme)}
                onMouseEnter={() => setHoveredTheme(theme)}
                onMouseLeave={() => setHoveredTheme(null)}
                className="theme-button"
              />
            ))}
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
       <p>Blender3D - ThreeJS - R3F - February 2025 <br />
       Music by : <a href="https://www.audiocoffee.net" target="_blank">AudioCoffee</a></p>
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
          <img
            src="./infos.png"
            alt="Infos"
            style={{
              width: "70%",
            }}
          />
          <p>
            You can play with the buttons to change
            <br />
            the animation of your creature!
          </p>
        </div>
        {/* Gros bouton pour la rotation */}
        <div className="button-rotation">
          <label>
            <span style={{ marginRight: "10px" }}>
              {autoRotate ? "Disable rotation" : "Enable rotation"}
            </span>

            {/* Switch Toggle */}
            <div
              className="switch-toggle"
              onClick={toggleAutoRotate}
              style={{
                background: autoRotate ? "#ffcc00" : "#ccc",
              }}
            >
              <div
                className="swith-toggle-cercle"
                style={{
                  left: autoRotate ? "26px" : "4px",
                }}
              />
            </div>
          </label>
        </div>

        {/* Gros bouton pour la musique */}
        <div className="button-music">
          <label>
            <span style={{ marginRight: "10px" }}>
              {isMusicPlaying ? "Disable music" : "Enable music"}
            </span>

            {/* Switch Toggle */}
            <div
              className="switch-toggle"
              onClick={toggleMusic}
              style={{
                background: isMusicPlaying ? "#ffcc00" : "#ccc",
              }}
            >
              <div
                className="swith-toggle-cercle"
                style={{
                  left: isMusicPlaying ? "26px" : "4px",
                }}
              />
            </div>
          </label>
        </div>
      </div>
      {/* Fin Overlay */}
    </div>
  );
}
