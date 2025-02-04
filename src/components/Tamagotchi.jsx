import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

export default function Tamagotchi(props) {
  const tamagotchi = useGLTF("./models/Tamagotchi/tamagotchi.glb");
  const [frameIndex, setFrameIndex] = useState(0);
  const textures = useTexture(
    Array.from({ length: 26 }, (_, i) => `./textures/test-cat.jpg${String(i + 1).padStart(4, "0")}.png`)
  );

  const intervalRef = useRef(null);

useEffect(() => {
  tamagotchi.scene.traverse((child) => {
    if (child.isMesh) {
      let materials = Array.isArray(child.material) ? child.material : [child.material];

      materials.forEach((mat) => {
        if (mat.name === "screen-1") {
          console.log(`✅ Matériau "screen-1" trouvé sur "${child.name}"`);
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

  return <primitive {...props} object={tamagotchi.scene} castShadow />;
}
