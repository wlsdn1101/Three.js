import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { Chicken } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [4, 2, 4] }}>
        <OrbitControls />
        {/*gridHelper : 좌표평면 그리기 args : 크기, 색상 */}
        <gridHelper args={[100, 100, "white", "pink"]} />
        {/*<Stars/> 우주 만들기 */}
        {/*ambientLight : 모든 오브젝트를 전역으로 빛을 비춰준다. 그림자 X */}
        <ambientLight intensity={1} />
        {/*spotLight : 원뿔 모양에 따라 빛 방출. 그림자 O */}
        <spotLight position={[10, 15, 10]} />
        <Chicken />
      </Canvas>
    </div>
  );
}

export default App;
