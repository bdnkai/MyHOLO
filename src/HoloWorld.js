import React, { Fragment, Suspense } from "react";
import { useState, useReducer } from "react"
import { Canvas } from "@react-three/fiber";
import Architecture from "./gltf-components/Architecture";
import { OrbitControls } from "@react-three/drei/";
import "./css/reset.css"
import "./css/styles.css";

const initialState = {
   holo_name: 'bdbdbdbd',
   health: 100,
   boredom: 0,
   hunger: 0,
   created_at: null, 
}

const HoloWorld = () => {
   const [myHolo, setHolo] = useState(initialState)
   // const [myHolo, dispatch] = useReducer(myHolo, initialState)

   
   return(
      <div>
         <div>
           <div className="canvas-container">
             <div className='canvas-display'>
               <Canvas>
                  <OrbitControls />
                  <ambientLight intensity={0} />
                  <directionalLight intensity={0.5} />
                <Suspense fallback={null}>
                   <Architecture />
                 </Suspense>
               </Canvas>
             </div>
             <div className="overlay-display" >
               <div className="holo-attributes">
                  <span>Name: {myHolo.holo_name}</span>
                  <span>Health: {myHolo.health}</span>
                  <span>Boredom: {myHolo.boredom}</span>
                  <span>Hunger: {myHolo.hunger} </span>
               </div>
             </div>
           </div>
         </div>
      </div>
   )




}

export default HoloWorld