import HoloState from './globalContext/holoContext/HoloState';
import HoloContainer from './HoloContainer';

const App = () => {
	return (
		<HoloState>
			<HoloContainer />
		</HoloState>
	);
};

export default App;
