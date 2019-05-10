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
			let todos = [...state.todos, ];
			todos = todos.filter(todo => todo.id !== action.payload);
			return { ...state, todos, fetching: false, };
		}
		case actions.EDIT_TODO: {
			const { id, content, } = action.payload;
			let todos = state.todos.map(todo =>
				todo.id === id ? { ...todo, ...content, } : todo);
			console.log(todos);
			return { ...state, todos, fetching: false, };
		}
		default: {
			return state;
		}
	}
}