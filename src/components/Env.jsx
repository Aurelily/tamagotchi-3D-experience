import { Environment } from "@react-three/drei";

export default function Env() {
  return (
    <Environment
      background={false} // can be true, false or "only" (which only sets the background) (default: false)
      backgroundBlurriness={0.36} // optional blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
      backgroundIntensity={0.7} // optional intensity factor (default: 1, only works with three 0.163 and up)
      backgroundRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
      environmentIntensity={0.7} // optional intensity factor (default: 1, only works with three 0.163 and up)
      environmentRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
      files={null}
      path="/"
      preset={"apartment"}
      scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
      encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
    />
  );
}
