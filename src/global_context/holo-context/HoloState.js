import { useContext, useState, useMemo, useReducer } from 'react';
import { TOGGLE_DISPLAY, FEED, PLAY, PERFORM } from './useActions';
import HoloContext from './HoloContext';
import holoReducer from './HoloReducer';
import '../../css/styles.css';

//------ initial state ------//
const initialState = {
	myHolo: {
		holo_name: 'Lorem',
		health: 100,
		isAlive: true,
		happiness: 100,
		hunger: 100,
		holo_coin: 100000,
	},
};

const HoloState = (component_receiver) => {
	//------- useReducer to manage state ------//
	const [state, dispatch] = useReducer(holoReducer, initialState);
	
	
	//------  TOGGLE_ DISPLAY  ------//
	const displayInfo = (myHolo) => {
		dispatch({
			type: TOGGLE_DISPLAY,
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

	//------ useMemo to Memoize State & Actions from useReducer  ------//
	const updateHolo = useMemo(
		() => ({
			myHolo: state.myHolo,
			display: displayInfo,
			feed: feedHolo,
			play: holoPlays,
			perform: holoPerforms,
		}),
		[state, dispatch]
	);

	return (
		<HoloContext.Provider value={updateHolo}>
			{component_receiver.children}
		</HoloContext.Provider>
	);
};

export default HoloState;
