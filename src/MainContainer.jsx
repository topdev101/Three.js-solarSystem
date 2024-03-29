import { OrbitControls, useHelper } from "@react-three/drei";
import AnimatedStars from "./AnimatedStart";
import { useRef } from "react";
import Earth from "./Earth";
import * as THREE from "three";

const MainContainer = () => {
  const directionalLightRef = useRef();
  const directionalLightRefTwo = useRef();
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "hotpink");
  useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, "hotpink");
  return (
    <>
      <OrbitControls />
      <AnimatedStars />
      <directionalLight
        ref={directionalLightRef}
        position={[0, 0, 10]}
        intensity={1}
      />
      <directionalLight ref={directionalLightRefTwo} position={[0, 0, -10]} />
      <Earth />
      <ambientLight />
    </>
  );
};

export default MainContainer;
