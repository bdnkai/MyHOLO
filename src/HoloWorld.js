import { Suspense, useContext, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/";
import HoloContext from './global_context/holo-context/HoloContext'
import Architecture from "./gltf_components/Architecture";
import "./css/reset.css"
import "./css/styles.css";



const HoloWorld = () => {
   const {myHolo, setHolo} = useContext(HoloContext)
   console.log({myHolo})
 
   // const sub = setHolo({...myHolo, holo_coin: 2000})   
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
                  <button className="open-attributes" onClick={console.log('button works')} >X</button>
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
                  <span className="holo-coin"> Holo Coin : {myHolo.holo_coin} </span>
                  <div className='coin-bar'></div>
               </div>

             </div>
           </div>
         </div>
      </div>
   )




}

export default HoloWorld