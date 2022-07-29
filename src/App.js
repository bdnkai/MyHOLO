import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Architecture from "./Architecture";
import { OrbitControls } from "@react-three/drei/";
import "./css/styles.css";

const App = () =>{
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.6} />
      <Suspense fallback={null}>
        <Architecture />
      </Suspense>
    </Canvas>
  );
}

export default App