export default function Overlay() {
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
      <a
        href="https://www.linkedin.com/in/aureliepreaud/"
        style={{ position: "absolute", bottom: 30, left: 30, fontSize: "13px" }}
      >
        <p>
          <b>Created by Aurelie PREAUD</b>
        </p>
        <p>
          {" "}
          I'm open for working on your 3D / ThreeJS project,
          <br />
          Contact me by LinkedIn
        </p>
        <img src="./linkedin.png" alt="linkedin" width={30} />
      </a>
      <div className="menu-container">
        <div className= "configurator-bg">
          <img src="./logos/logo-mocha.png" alt="Tamagotchi" width={400} />
          <div className="buttons-container">
            <a href=""><img src="./buttons/bt-mocha.png" alt="Mocha cat" /></a>
            <a href=""><img src="./buttons/bt-fruty.png" alt="Fruty ty" /></a>
            <a href=""><img src="./buttons/bt-egg.png" alt="Egg Muffin" /></a>
            <a href=""><img src="./buttons/bt-tea.png" alt="Green tea" /></a> 
          </div>
        </div>
      </div>
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
