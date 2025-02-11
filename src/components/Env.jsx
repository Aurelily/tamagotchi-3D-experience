import { Sky } from "@react-three/drei";
import { DirectionalLight } from "three";

export default function Env() {
  return (
    <>
      {/* Ciel avec effets de dégradé et lumière */}
      <Sky
        distance={450000} // Distance du ciel
        sunPosition={[1, 1, 0]} // Position du soleil pour définir les ombres et la lumière
        inclination={1} // Inclinaison du soleil
        azimuth={0.25} // Azimut du soleil (contrôle la direction de la lumière)
        turbidity={10} // Turbidité pour ajuster l'effet de brouillard
        rayleigh={1} // Augmenter l'azurité pour un ciel plus lumineux et plus vibrant
        mieCoefficient={2} // Effet de lumière diffuse
        mieDirectionalG={0.8} // Eclairement diffus
        exposure={5} // Augmenter légèrement l'exposition pour plus de saturation
      />
      {/* Lumière directionnelle pour éclairer la scène */}
      <directionalLight
        position={[5, 5, 5]} // Position de la lumière
        intensity={1.2} // Augmenter l'intensité de la lumière pour plus de contraste et de couleur
        castShadow={true} // Activer les ombres
      />
      {/* Lumière ambiante pour adoucir l'éclairage global */}
      <ambientLight intensity={0.9} />
      {/* Réduire l'intensité pour plus de contraste et de saturation */}
    </>
  );
}
