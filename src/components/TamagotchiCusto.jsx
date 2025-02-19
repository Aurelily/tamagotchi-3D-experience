import { useGLTF, Center, Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useEffect, useRef, useState } from "react";
import { useTamagotchiStore } from "../store";

export default function TamagotchiCusto(props) {
  const { textures, frameCount } = useTamagotchiStore();
  const { scene } = useGLTF("./models/Tamagotchi/tamagotchi-custom.glb");

  // États pour gérer l'affichage de l'écran
  const [isSleeping, setIsSleeping] = useState(false);
  const [isEating, setIsEating] = useState(false);

  // Déterminer la texture active
  const currentScreen = isSleeping
    ? textures.sleep
    : isEating
    ? textures.eat
    : textures.screen;

  // Chargement des textures
  const mainTexture = textures.main
    ? useLoader(TextureLoader, textures.main)
    : null;

  const screenTextures = useLoader(
    TextureLoader,
    Array.from(
      { length: frameCount },
      (_, i) => `${currentScreen}${String(i + 1).padStart(4, "0")}.png`
    )
  );

  if (screenTextures.length > 0) {
    screenTextures.forEach((texture) => {
      texture.flipY = false;
      texture.needsUpdate = true;
    });
  }

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

  // Appliquer les textures et couleurs aux matériaux du modèle
  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.isMesh) {
        let materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        materials.forEach((mat) => {
          switch (mat.name) {
            case "text-main":
              if (mainTexture) {
                mat.map = mainTexture;
                mat.map.flipY = false;
                mat.map.needsUpdate = true;
              }
              break;
            case "text-screen":
              screenRef.current = child;
              if (screenTextures.length > 0) {
                mat.map = screenTextures[0];
                mat.needsUpdate = true;
              }
              break;
            case "text-ring":
              if (textures.ring) mat.color.set(textures.ring);
              break;
            case "text-button":
              if (textures.button) mat.color.set(textures.button);
              break;
          }
        });

        // Marquer les boutons comme cliquables
        if (["bouton1", "bouton2", "bouton3"].includes(child.name)) {
          child.userData.clickable = true;
        }
      }
    });
  }, [scene, mainTexture, screenTextures, textures]);

  // Fonction pour jouer un son
  const playSound = (soundFile) => {
    const audio = new Audio(`./sounds/${soundFile}.mp3`);
    audio.play();
  };

  // Gestion du clic sur les boutons avec son
  const handlePointerDown = (event) => {
    document.body.style.cursor = "grabbing"; // Curseur "grabbing" pendant le clic

    const clickedButton = event.object.name;
    switch (clickedButton) {
      case "bouton1":
        setIsSleeping((prev) => !prev);
        setIsEating(false);
        playSound("sleep");
        break;
      case "bouton2":
        setIsEating(true);
        setIsSleeping(false);
        playSound("eat");
        break;
      case "bouton3":
        setIsEating(false);
        setIsSleeping(false);
        playSound("play");
        break;
      default:
        break;
    }
  };

  // Gestion du relâchement du clic
  const handlePointerUp = () => {
    document.body.style.cursor = "grab"; // Curseur "grab" après avoir relâché
  };

  // Gestion du survol du modèle
  const handlePointerOver = () => {
    document.body.style.cursor = "grab"; // Curseur "grab" quand la souris passe dessus
  };

  // Gestion de la sortie de la souris du modèle
  const handlePointerOut = () => {
    document.body.style.cursor = "auto"; // Curseur par défaut quand la souris sort
  };

  return (
    <Float
      speed={3}
      rotationIntensity={1}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0]}
    >
      <Center>
        {scene ? (
          <primitive
            {...props}
            object={scene}
            castShadow
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          />
        ) : (
          <p>Modèle non chargé...</p>
        )}
      </Center>
    </Float>
  );
}
