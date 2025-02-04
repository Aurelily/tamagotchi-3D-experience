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
      <div
        style={{ position: "absolute", top: 30, left: 30, fontSize: "13px" }}
      >
        <h1>Tamagotchi 3D Experience</h1>
        <p>
          Use your mouse to rotate, <br />
          zoom and explore <br />
          your tamagotchi experience !
        </p>
        <img src="./mouse.png" alt="mouse" />
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
