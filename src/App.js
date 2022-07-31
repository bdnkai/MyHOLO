import React, { Fragment, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/";
import HoloContainer from "./HoloContainer";
import "./css/styles.css";
import "./css/reset.css"


const App = () =>{
  return(
    <div>
      <HoloContainer/>
    </div>
  )
}

export default App