import {
  useGLTF,
  useTexture,
  PresentationControls,
  Center,
  Float,
} from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import { useControlsStore } from "../store";

export default function Tamagotchi(props) {
  const { modelUrl } = useControlsStore();
  const [frameIndex, setFrameIndex] = useState(0);
  const intervalRef = useRef(null);
  const { scene } = useGLTF(modelUrl);

  console.log("Render du composant avec modelUrl :", modelUrl);

  useEffect(() => {
    console.log("Modèle chargé :", scene);
  }, [scene]);

  const animations = {
    "./models/Tamagotchi/tamagotchi-mocha.glb": {
      path: "./textures/cat/cat",
      frameCount: 26,
    },
    "./models/Tamagotchi/tamagotchi-frutyty.glb": {
      path: "./textures/fruty/fruty",
      frameCount: 43,
    },
    "./models/Tamagotchi/tamagotchi-egg.glb": {
      path: "./textures/chick/chick",
      frameCount: 52,
    },
    "./models/Tamagotchi/tamagotchi-tea.glb": {
      path: "./textures/tea/tea",
      frameCount: 26,
    },
  };

  const { path, frameCount } =
    animations[modelUrl] ||
    animations["./models/Tamagotchi/tamagotchi-mocha.glb"];

  const textures = useTexture(
    Array.from({ length: frameCount }, (_, i) =>
      `${path}${String(i + 1).padStart(4, "0")}.png`
    )
  );

  useEffect(() => {
    console.log("Textures chargées :", textures);
  }, [textures]);

  useEffect(() => {
    if (!scene || textures.length !== frameCount) return;

    scene.traverse((child) => {
      if (child.isMesh) {
        let materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        materials.forEach((mat) => {
          if (mat.name === "screen-1" && textures[frameIndex]) {
            if (mat.map) mat.map.dispose(); // Libérer la mémoire
            mat.map = textures[frameIndex];
            mat.map.needsUpdate = true;
          }
        });

        if (
          child.geometry.attributes.uv &&
          !child.geometry.attributes.uv._flipped
        ) {
          const uvAttribute = child.geometry.attributes.uv;
          for (let i = 0; i < uvAttribute.count; i++) {
            uvAttribute.setY(i, 1 - uvAttribute.getY(i));
          }
          uvAttribute.needsUpdate = true;
          child.geometry.attributes.uv._flipped = true;
        }
      }
    });
  }, [scene, textures, frameIndex]);

  useEffect(() => {
    if (textures.length !== frameCount) return;

    intervalRef.current = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frameCount);
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [textures, frameCount]);

  useEffect(() => {
    return () => {
      // Libérer les textures lorsqu'on démonte le composant
      textures.forEach((texture) => texture.dispose && texture.dispose());
    };
  }, [textures]);

  return (
    <Suspense fallback={<p>Chargement du modèle...</p>}>
      {scene ? (
        <Float
          speed={3}
          rotationIntensity={1}
          floatIntensity={0.5}
          floatingRange={[-0.1, 0]}
        >
          <Center top>
            <PresentationControls
              global
              config={{ mass: 1, tension: 100 }}
              snap={{ mass: 1, tension: 500 }}
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 5, Math.PI / 5]}
            >
              <primitive {...props} object={scene} castShadow />
            </PresentationControls>
          </Center>
        </Float>
      ) : (
        console.log("❌ Modèle non chargé !")
      )}
    </Suspense>
  );
}
