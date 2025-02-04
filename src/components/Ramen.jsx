import {
  useGLTF,
  PresentationControls,
  Center,
  Float,
} from "@react-three/drei";

export default function Ramen(props) {
  const ramen = useGLTF("./models/Ramen/glTF/ramen-2.gltf");
  // const ramen = useGLTF("./models/Ramen/draco-ramen/ramen-low.gltf");

  return (
    <>
      {/*      <Float
        speed={5} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.5, 0]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      > */}
      <Center top>
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
        >
          <primitive {...props} object={ramen.scene} castShadow />;
        </PresentationControls>
      </Center>
      {/*  </Float> */}
    </>
  );
}

useGLTF.preload("./models/Ramen/glTF/ramen-2.gltf");
