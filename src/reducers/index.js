import { combineReducers } from 'redux';

export default function(state = 0, action) {

	switch(action.type) {

		case 'TOGGLE_ROOM':
			console.log("TOGGLED " + action.payload)
			return {
				...state,
				roomType: action.payload
			};
	}
	
	return state;
}
