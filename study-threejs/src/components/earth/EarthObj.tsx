import React from "react";
import { Canvas } from "react-three-fiber";
import { Stars } from "@react-three/drei";
import Earth from "./Earth";
const EarthObj = () => {
  return (
    <Canvas>
      <Stars />
      {/*ambientLight : 모든 오브젝트를 전역으로 빛을 비춰준다. 그림자 X */}
      <ambientLight intensity={1} />
      <Earth />
    </Canvas>
  );
};

export default EarthObj;
