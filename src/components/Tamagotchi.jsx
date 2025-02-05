import {
  useGLTF,
  useTexture,
  PresentationControls,
  Center,
  Float,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

export default function Tamagotchi(props) {
  const tamagotchi = useGLTF("./models/Tamagotchi/tamagotchi.glb");
  const [frameIndex, setFrameIndex] = useState(0);
  const textures = useTexture(
    Array.from(
      { length: 26 },
      (_, i) => `./textures/test-cat.jpg${String(i + 1).padStart(4, "0")}.png`
    )
  );

  const intervalRef = useRef(null);

  useEffect(() => {
    tamagotchi.scene.traverse((child) => {
      if (child.isMesh) {
        let materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        materials.forEach((mat) => {
          if (mat.name === "screen-1") {
            // console.log(`✅ Matériau "screen-1" trouvé sur "${child.name}"`);
            mat.map = textures[frameIndex];
            mat.map.needsUpdate = true;

            // Vérifier si l'inversion des UVs a déjà été faite
            if (!child.geometry.attributes.uv._flipped) {
              const uvAttribute = child.geometry.attributes.uv;
              for (let i = 0; i < uvAttribute.count; i++) {
                uvAttribute.setY(i, 1 - uvAttribute.getY(i)); // Inverser l'axe Y
              }
              uvAttribute.needsUpdate = true;
              child.geometry.attributes.uv._flipped = true; // Marquer l'inversion comme faite
            }
          }
        });
      }
    });
  }, [tamagotchi, textures, frameIndex]);

  useEffect(() => {
    if (textures.length === 26) {
      intervalRef.current = setInterval(() => {
        setFrameIndex((prev) => (prev + 1) % 26);
      }, 100); // Change d'image toutes les 100ms (10 FPS)
    }

    return () => clearInterval(intervalRef.current);
  }, [textures]);

  return (
    <>
      <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Center top>
          <PresentationControls
            global
            config={{ mass: 1, tension: 100 }}
            snap={{ mass: 1, tension: 500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 5, Math.PI / 5]}
          >
            <primitive {...props} object={tamagotchi.scene} castShadow />
          </PresentationControls>
        </Center>
      </Float>
    </>
  );
}
