export default function Placeholder(props) {
  return (
    // Je passe la taille et la position du placeholder en props pour qu'il puisse être utilisé pour d'autres models d'autres taille
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshBasicMaterial wireframe color="red" />
    </mesh>
  );
}
