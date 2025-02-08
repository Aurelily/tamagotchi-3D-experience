import {
  useGLTF,
  useTexture,
  PresentationControls,
  Center,
  Float,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useControlsStore } from "../store"; // Importer le store Zustand

export default function Tamagotchi(props) {
  const { modelUrl } = useControlsStore(); // ✅ Récupérer le modèle actuel
  const tamagotchi = useGLTF(modelUrl); // Charger dynamiquement le bon modèle
  const [frameIndex, setFrameIndex] = useState(0);
  const textures = useTexture(
    Array.from(
      { length: 26 },
      (_, i) => `./textures/cat${String(i + 1).padStart(4, "0")}.png`
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
            mat.map = textures[frameIndex];
            mat.map.needsUpdate = true;
          }
        });

        // 🔄 Réinversion des UVs pour corriger l'affichage
        if (child.geometry.attributes.uv && !child.geometry.attributes.uv._flipped) {
          const uvAttribute = child.geometry.attributes.uv;
          for (let i = 0; i < uvAttribute.count; i++) {
            uvAttribute.setY(i, 1 - uvAttribute.getY(i)); // Inverser Y
          }
          uvAttribute.needsUpdate = true;
          child.geometry.attributes.uv._flipped = true; // Éviter de le refaire à chaque frame
        }
      }
    });
  }, [tamagotchi, textures, frameIndex]);

  useEffect(() => {
    if (textures.length === 26) {
      intervalRef.current = setInterval(() => {
        setFrameIndex((prev) => (prev + 1) % 26);
      }, 100);
    }

    return () => clearInterval(intervalRef.current);
  }, [textures]);

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={0.5} floatingRange={[-0.1, 0]}>
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
  );
}
