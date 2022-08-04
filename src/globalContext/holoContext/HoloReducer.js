import { FEED, PLAY, PERFORM, CHANGE_NAME } from './useActions';

const holoReducer = (state, action) => {
	switch (action.type) {
		// -------  CASE: NAME CHANGE ------- //
		case CHANGE_NAME:
			return {
				...state,
				...state.myHolo,
				holo_name: [...state.myHolo.name, action.payload],
			};
		//-------  CASE: FEED  --------//
		case FEED:
			return {
				...state,
				...state.myHolo,
				hunger: [(state.myHolo.hunger -= 10)],
				happiness: [(state.myHolo.happiness += 10)],
				holo_coin: [(state.myHolo.holo_coin -= 1000)],
			};
		//------  CASE: PLAY  -------//
		case PLAY:
			return {
				...state,
				...state.myHolo,
				hunger: [(state.myHolo.hunger -= 25)],
				happiness: [(state.myHolo.happiness += 10)],
			};
		// ------  CASE: PERFORM ------//
		case PERFORM:
			return {
				...state,
				...state.myHolo,
				holo_coin: [(state.myHolo.holo_coin += 1000)],
				hunger: [(state.myHolo.hunger += 25)],
				happiness: [(state.myHolo.happiness -= 25)],
			};
		default:
			return state.myHolo;
	}
};

export default holoReducer;
