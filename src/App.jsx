import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useTamagotchiStore } from "./store"; // Import Zustand

import TamagotchiCusto from "./components/TamagotchiCusto";
import Env from "./components/Env";
import Loader from "./components/Loader"; // Assurez-vous que le Loader est importé

export default function App() {
  const autoRotate = useTamagotchiStore((state) => state.autoRotate); // Lire l’état global

  return (
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
        autoRotate={autoRotate} // Dynamique selon Zustand
        autoRotateSpeed={6}
        enablePan={false}
        enableZoom={true}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
      />
    </Canvas>
  );
}
