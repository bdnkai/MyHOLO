import React, { Fragment, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Architecture from "./gltf-components/Architecture";
import { OrbitControls } from "@react-three/drei/";
import HoloWorld from "./HoloWorld"
import "./css/styles.css";
import "./css/reset.css"



const HoloContainer = () => {

   return (
      <HoloWorld/>
   );

   
}

export default HoloContainer