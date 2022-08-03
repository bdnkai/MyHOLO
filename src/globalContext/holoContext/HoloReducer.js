import { FEED, PLAY, PERFORM, TOGGLE_DISPLAY } from './useActions';

const holoReducer = (state, action) => {
	switch (action.type) {
		case TOGGLE_DISPLAY:
			console.log('toggle here');
			return {};

		case FEED:
			console.log('feed here');
			return {
				...state,
				...state.myHolo,
				hunger: (state.myHolo.hunger += 10),
				happiness: (state.myHolo.happiness += 5),
				holo_coin: (state.myHolo.holo_coin -= 1000),
			};
			console.log(state.myHolo);
		case PLAY:
			console.log('play here');
			return {
				...state,
				...state.myHolo,
				hunger: (state.myHolo.hunger -= 25),
				happiness: (state.myHolo.happiness += 10),
			};
		case PERFORM:
			console.log('dance here');
			return {
				...state,
				...state.myHolo,
				holo_coin: (state.myHolo.holo_coin += 1000),
				hunger: (state.myHolo.hunger -= 25),
				happiness: (state.myHolo.happiness -= 25),
			};

		default:
			return state;
	}
};

export default holoReducer;
