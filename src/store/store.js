import { createStore } from "redux";
//format initial du state global
const initialState = {
	todos: [],
    count:0
};

// le reducer permet de manipuler les actions de la vue (composant React)
// on ne manipule jamais le state directement mais une copie (comme usestate)
const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return {
				...state,
				todos: [
                    ...state.todos,
                     action.payload
                    ],
			};
		case "ADD_COUNT":
			return {
				...state,
				count: state.count+1,
			};


		default:
			return state
	}
};

const store = createStore(todoReducer);

export default store;
