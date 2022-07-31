import { useContext } from "react";
import HoloContext from "./global_context/holo-context/HoloContext"
import HoloWorld from "./HoloWorld"
import "./css/styles.css";
import "./css/reset.css"



const HoloContainer = () => {
const {myHolo, setHolo } = useContext(HoloContext)
console.log({setHolo})

   return (
      <div>
         {!myHolo.name && <HoloWorld/>}
      </div>
   );

   
}

export default HoloContainer