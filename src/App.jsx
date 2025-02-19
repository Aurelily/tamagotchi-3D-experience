import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useTamagotchiStore } from "./store"; // Penser à importer et installer Zustand

import TamagotchiCusto from "./components/TamagotchiCusto";
import Env from "./components/Env";
import Loader from "./components/Loader";
import Background from "./components/Background";

export default function App() {
  const autoRotate = useTamagotchiStore((state) => state.autoRotate); // Etat global pour gérer le bouton switch pour la rotation automatique

  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 25 }}>
        <Suspense fallback={<Loader />}>
          {/* Affiche la barre de progression avant de rendre le contenu */}
          <Center>
            <group position={[0, -2, 0]}>
              <TamagotchiCusto scale={0.4} rotation-x={0} position-y={1.2} />
            </group>
          </Center>
          <Env />
        </Suspense>

        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={6}
          enablePan={false}
          enableZoom={true}
          enableRotate={true} // Permet la rotation libre
          minPolarAngle={0} // Supprime la limitation de l’angle
          maxPolarAngle={Math.PI} // Permet de tourner tout autour
        />
      </Canvas>
      <Background />
    </>
  );
}
