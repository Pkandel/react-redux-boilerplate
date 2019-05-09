import * as actions from 'src/actions/actionTypes';
// define initial state of todo
const initialState = {
	fetching: false,
	error: null,
	todos: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case actions.TODO_PENDING: {
			return { ...state,  fetching: true, };
		}
		case actions.ADD_TODO: {
			const todos = [...state.todos,];
			todos.push(action.payload);
			return { ...state,  todos, fetching: false, };
		}
		case actions.REMOVE_TODO: {
			let todos = [...state.todos,];
			const index = todos.findIndex(item => item.id === action.paylod);
			todos.splice(index, 1);
			return { ...state, todos, fetching: false, };
		}
		default: {
			return state;
		}
	}
}