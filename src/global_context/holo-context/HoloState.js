import {useContext, useState, useMemo} from "react";
import HoloContext from "./HoloContext";

const initialState = {
   holo_name: 'Lorem',
   health: 100,
   isAlive: true, 
   happiness: 25,
   hunger: 25,
   holo_coin: 10000,
   created_at: '', 
}


const HoloState = (components) =>{
   const [myHolo, setHolo] = useState(initialState)


   return(
      <HoloContext.Provider value={{myHolo, setHolo}}>
         {components.children}
      </HoloContext.Provider>
   )



}

export default HoloState;