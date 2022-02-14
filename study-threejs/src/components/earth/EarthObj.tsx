import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from "./Earth";
import Moon from "./Moon";
const EarthObj = () => {
  return (
    <Canvas camera={{ fov: 75, position: [-4, 8, 4] }}>
      <OrbitControls />
      <Stars />
      {/*ambientLight : 모든 오브젝트를 전역으로 빛을 비춰준다. 그림자 X */}
      <ambientLight intensity={1} />
      <Moon />
      <Earth />
    </Canvas>
  );
};

export default EarthObj;
