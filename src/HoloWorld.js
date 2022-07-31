import React, { Fragment, Suspense } from "react";
import { useState, useReducer } from "react"
import { Canvas } from "@react-three/fiber";
import Architecture from "./gltf-components/Architecture";
import { OrbitControls } from "@react-three/drei/";
import "./css/reset.css"
import "./css/styles.css";

const initialState = {
   holo_name: 'RealName',
   health: 100,
   happiness: 25,
   hunger: 25,
   created_at: null, 
}

const HoloWorld = () => {
   const [myHolo, setHolo] = useState(initialState)


   
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
             <div className="holo-buttons">
                  <button className="open-attributes">X</button>
               </div>
             <div className="overlay-display" >
               
               <div className="holo-attributes" style={{display: ''}}>
                  <span className="holo-name"> {myHolo.holo_name}</span>
                  <span className="holo-health"> Health: {myHolo.health} </span>
                  <div className='health-bar'></div>
                  <span className="holo-happiness"> Happiness: {myHolo.happiness} </span>
                  <div className='happy-bar'></div>
                  <span className="holo-hunger"> Hunger: {myHolo.hunger} </span>
                  <div className='hungry-bar'></div>
                  <span className="holo-coin"> Holo Coin : {myHolo.health} </span>
                  <div className='coin-bar'></div>
               </div>

             </div>
           </div>
         </div>
      </div>
   )




}

export default HoloWorld