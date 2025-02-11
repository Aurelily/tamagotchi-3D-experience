import {
  useGLTF,
  PresentationControls,
  Center,
  Float,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useEffect, useRef } from "react";
import { useTamagotchiStore } from "../store";

export default function TamagotchiCusto(props) {
  const { theme, textures, frameCount, setTheme } = useTamagotchiStore();
  const { scene } = useGLTF("./models/Tamagotchi/tamagotchi-custom.glb");

  console.log("🔄 Chargement du modèle 3D...", scene);

  // Assurer que le thème par défaut est "mocha"
  useEffect(() => {
    if (theme !== "mocha") {
      console.log("🎨 Mise à jour du thème → Mocha");
      setTheme("mocha");
    }
  }, [theme, setTheme]);

  // Chargement des textures principales
  const mainTexture = useLoader(TextureLoader, textures.main || "");

  // Charger toutes les images de l'animation du screen
  const screenTextures = useLoader(
    TextureLoader,
    Array.from(
      { length: frameCount },
      (_, i) => `${textures.screen}${String(i + 1).padStart(4, "0")}.png`
    )
  );

  // Corriger l'orientation de toutes les textures du screen
  screenTextures.forEach((texture) => {
    texture.flipY = false;
    texture.needsUpdate = true;
  });

  console.log("🎨 Textures chargées:", textures);
  console.log("🖼️ MainTexture:", mainTexture);
  console.log("📺 ScreenTextures (animation corrigée):", screenTextures);

  // Références pour l'écran
  const screenRef = useRef();

  // Animation du screen
  useEffect(() => {
    if (!screenTextures || screenTextures.length === 0) return;

    let frameIndex = 0;
    const interval = setInterval(() => {
      if (screenRef.current) {
        screenRef.current.material.map = screenTextures[frameIndex];
        screenRef.current.material.needsUpdate = true;
        frameIndex = (frameIndex + 1) % screenTextures.length;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [screenTextures]);

  // Appliquer les textures et couleurs au modèle
  useEffect(() => {
    if (!scene) {
      console.warn("⚠️ Modèle 3D non chargé !");
      return;
    }

    console.log("🔍 Parcours des matériaux du modèle...");
    scene.traverse((child) => {
      if (child.isMesh) {
        let materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        materials.forEach((mat) => {
          console.log(`🎭 Matériau trouvé: ${mat.name}`);

          switch (mat.name) {
            case "text-main":
              if (mainTexture) {
                console.log("🖌️ Application de la texture Main !");
                mat.map = mainTexture;
                mat.map.flipY = false;
                mat.map.needsUpdate = true;
              }
              break;
            case "text-screen":
              screenRef.current = child;
              if (screenTextures.length > 0) {
                mat.map = screenTextures[0]; // Définir l'image de départ
                mat.needsUpdate = true;
              }
              break;
            case "text-ring":
              if (textures.ring) {
                console.log(`🔵 Changement couleur anneau: ${textures.ring}`);
                mat.color.set(textures.ring);
                mat.needsUpdate = true;
              } else {
                console.warn("⚠️ Aucune couleur pour l'anneau !");
              }
              break;
            case "text-button":
              if (textures.button) {
                console.log(
                  `🔘 Changement couleur boutons: ${textures.button}`
                );
                mat.color.set(textures.button);
                mat.needsUpdate = true;
              } else {
                console.warn("⚠️ Aucune couleur pour les boutons !");
              }
              break;

            default:
              console.log(`⚪ Matériau ignoré: ${mat.name}`);
              break;
          }
        });
      }
    });

    console.log("✅ Textures et couleurs appliquées !");
  }, [scene, mainTexture, screenTextures, textures]);

  return (
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
          {scene ? (
            <primitive {...props} object={scene} castShadow />
          ) : (
            <p>Modèle non chargé...</p>
          )}
        </PresentationControls>
      </Center>
    </Float>
  );
}
