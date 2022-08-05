import { FEED, PLAY, PERFORM, CHANGE_NAME } from './useActions';

const holoReducer = (state, action) => {
	switch (action.type) {
		// -------  CASE: NAME CHANGE ------- //
		case CHANGE_NAME:
			return {
				...state,
				...state.myHolo,
				holo_name: [...state.myHolo.holo_name, action.payload],
			};
		//-------  CASE: FEED  --------//
		case FEED:
			return {
				...state,
				...state.myHolo,
				hunger:
					state.myHolo.hunger > 0
						? [(state.myHolo.hunger -= 5)]
						: (state.myHolo.hunger = 0),
				happiness:
					state.myHolo.happiness < 100
						? [(state.myHolo.happiness += 5)]
						: (state.myHolo.happiness = 100),
				holo_coin:
					state.myHolo.holo_coin > 0
						? [(state.myHolo.holo_coin -= 250)]
						: (state.myHolo.holo_coin = 0),
			};
		//------  CASE: PLAY  -------//
		case PLAY:
			return {
				...state,
				...state.myHolo,
				hunger:
					state.myHolo.hunger > 0
						? [(state.myHolo.hunger -= 5)]
						: (state.myHolo.hunger = 0),
				happiness:
					state.myHolo.happiness < 100
						? [(state.myHolo.happiness += 5)]
						: (state.myHolo.happiness = 100),
			};
		// ------  CASE: PERFORM ------//
		case PERFORM:
			return {
				...state,
				...state.myHolo,
				holo_coin:
					state.myHolo.holo_coin >= 0
						? [(state.myHolo.holo_coin += 250)]
						: (state.myHolo.holo_coin = 0),
				hunger:
					state.myHolo.hunger < 100
						? [(state.myHolo.hunger += 5)]
						: (state.myHolo.hunger = 100),
				happiness:
					state.myHolo.happiness > 0
						? [(state.myHolo.happiness -= 5)]
						: (state.myHolo.happiness = 0),
			};
		default:
			return {
				...state.myHolo,
			};
	}
};

export default holoReducer;
