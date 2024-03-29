import { useTexture } from "@react-three/drei";

const Earth = () => {
  const [earthTexture] = useTexture(["/assets/earth_day.jpg"]);
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
};

export default Earth;
