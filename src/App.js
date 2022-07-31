import React, { Fragment, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Architecture from "./gltf-components/Architecture";
import { OrbitControls } from "@react-three/drei/";
import HoloContainer from "./HoloContainer";
import HoloDisplay from "./gltf-components/HoloDisplay"
import "./css/styles.css";
import "./css/reset.css"

const App = () =>{
  return (
    <div>
      <div className="canvas-container">
        <div className='display'>
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0} />
          <directionalLight intensity={0.5} />
          <Suspense fallback={null}>
            <Architecture />
          </Suspense>
        </Canvas>
        </div>
        <div className="overlay">
          <HoloContainer/>
        </div>
      </div>
    </div>
    
  );
}

export default App