import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

function Box() {
  return (
    <mesh>
      <cylinderBufferGeometry args={[1, 1, 0.3, 50]} />
      <meshLambertMaterial attach="material" color="gold" />
    </mesh>
  );
}
function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} />
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
