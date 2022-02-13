import React, { useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

import EarthMap from "../../assets/WorldMapWithClouds.jpg";
const Earth = () => {
  const earthmap = useLoader(TextureLoader, EarthMap);
  const earthRef = useRef<any>();
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    earthRef.current.rotation.y = time / 6;
  });
  return (
    <mesh scale={1.5} ref={earthRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={earthmap} />
    </mesh>
  );
};

export default Earth;
