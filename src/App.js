import HoloState from "./global_context/holo-context/HoloState";
import HoloContainer from "./HoloContainer";
import "./css/styles.css";
import "./css/reset.css"


const App = () =>{
  return(
    <HoloState>
      <HoloContainer/>
    </HoloState>
  )
}

export default App