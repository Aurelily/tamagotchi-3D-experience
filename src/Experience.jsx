import {
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
  Float,
  Environment,
  Text,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
// J'importe le composant React Suspense pour englober le model et attendre son chargement sans arréter le reste de l'experience
import { Suspense } from "react";

// Import components
import Ramen from "./components/Ramen";
import Placeholder from "./components/Placeholder";

export default function Experience() {
  return (
    <>
      {/*  <Perf position="top-left" /> */}
      {/* <Environment background files="./background/kitchen.jpg" /> */}
      <Environment
        background={true} // can be true, false or "only" (which only sets the background) (default: false)
        backgroundBlurriness={0.08} // optional blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
        backgroundIntensity={1} // optional intensity factor (default: 1, only works with three 0.163 and up)
        backgroundRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
        environmentIntensity={0.6} // optional intensity factor (default: 1, only works with three 0.163 and up)
        environmentRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
        /*  files={["./background/kitchen.jpg"]} */
        files={null}
        path="/"
        preset={"apartment"}
        scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
        encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
      />

      {/* <OrbitControls makeDefault /> */}

      {/*   <GizmoHelper
        alignment="bottom-right" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
      >
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper> */}
      <Text
        font="./fonts/bangers-v20-latin-regular.woff"
        fontSize={0.4}
        color="black"
        position={[0, 2, 0]}
        maxWidth={4}
        textAlign="center"
      >
        Coming soon !{/* <meshNormalMaterial /> */}
      </Text>

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <Suspense fallback={<Placeholder scale={[1, 1, 1]} />}>
        <Float
          speed={2} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Ramen
            scale={0.5}
            position-y={-2}
            rotation-z={0.09}
            rotation-x={0.09}
            rotation-y={0}
          />
        </Float>
      </Suspense>
    </>
  );
}
