import React, { useRef } from "react";
import { TextureLoader } from "three";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import MoonMap from "../../assets/Moon.jpg";
const Moon = () => {
  const moonMap = useLoader(TextureLoader, MoonMap);
  const moonRef = useRef<any>();
  const moonPosition = new THREE.Vector3(2, 2, 2);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    moonRef.current.rotation.y = time / 8;
  });
  return (
    <mesh scale={0.5} position={moonPosition} ref={moonRef}>
      <sphereGeometry args={[1, 32, 32]}></sphereGeometry>
      <meshStandardMaterial map={moonMap} />
    </mesh>
  );
};

export default Moon;
