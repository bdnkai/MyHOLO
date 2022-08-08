import { useMemo, useReducer } from 'react';
import { CHANGE_NAME, FEED, PLAY, PERFORM } from './useActions';
import HoloContext from './HoloContext';
import holoReducer from './HoloReducer';
import '../../css/styles.css';
import '../../css/holoPanel.css';
import '../../css/holoButtons.css';

const HoloState = (component_receiver) => {
	//------ initial state ------//
	const initialState = {
		myHolo: {
			holo_name: 'Lorem',
			health: 100,
			isAlive: true,
			happiness: 100,
			hunger: 100,
			holo_coin: 5000,
		},
	};

	//------- useReducer to manage state ------//
	const [state, dispatch] = useReducer(holoReducer, initialState);

	//------  CHANGE_NAME  ------//
	const displayInfo = (myHolo) => {
		dispatch({
			type: CHANGE_NAME,
			payload: myHolo,
		});
	};

	//------  FEED  ------//
	const feedHolo = (myHolo) => {
		dispatch({
			type: FEED,
			payload: myHolo,
		});
	};

	//------  PLAY  ------//
	const holoPlays = (myHolo) => {
		dispatch({
			type: PLAY,
			payload: myHolo,
		});
	};

	//------  PERFORM / DANCE  ------//
	const holoPerforms = (myHolo) => {
		dispatch({
			type: PERFORM,
			payload: myHolo,
		});
	};

	//---useMemo to Memoize State & Actions from useReducer---//
	const updateHolo = useMemo(
		() => ({
			myHolo: state.myHolo,
			display: displayInfo,
			feed: feedHolo,
			play: holoPlays,
			perform: holoPerforms,
		}),
		[{ myHolo: state.myHolo }]
	);

	return (
		<HoloContext.Provider value={updateHolo}>
			{component_receiver.children}
		</HoloContext.Provider>
	);
};

export default HoloState;
