import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import Tamagotchi from "./components/Tamagotchi";
import Env from "./components/Env";

export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 6], fov: 25 }}>
      <Center>
        <group position={[0, -2, 0]}>
          <Tamagotchi scale={0.4} rotation-x={0} position-y={1} />
        </group>
      </Center>
      <Env />
      <OrbitControls
        autoRotate
        autoRotateSpeed={6}
        enablePan={false}
        enableZoom={true}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
      />
    </Canvas>
  );
}
