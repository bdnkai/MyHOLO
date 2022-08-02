import HoloState from './global_context/holo-context/HoloState';
import HoloContainer from './HoloContainer';


const App = () => {
	return (
		<HoloState>
			<HoloContainer />
		</HoloState>
	);
};

export default App;
