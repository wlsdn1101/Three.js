import React, { useRef } from "react";
import { TextureLoader } from "three";
import { useLoader } from "react-three-fiber";
import MoonMap from "../../assets/Moon.jpg";
const Moon = () => {
  const moonMap = useLoader(TextureLoader, MoonMap);
  const ref = useRef();
  return (
    <mesh scale={0.5} position={[2, 2, 2]} ref={ref}>
      <sphereGeometry args={[1, 32, 32]}></sphereGeometry>
      <meshStandardMaterial map={moonMap} />
    </mesh>
  );
};

export default Moon;
