import * as actions from './actionTypes';

let nextTodoId = 0;
export const addTodo = content => ({
			type: actions.ADD_TODO,
			payload: {
				id: ++nextTodoId,
				content,
			},
});

export const removeTodo = id => {
	// using dispatch we can return a function
	return dispatch => {
		// fake loading behaviour
		dispatch({
			type: actions.TODO_PENDING,
			payload: null,
		});
		setTimeout(() => {
			dispatch({
				type: actions.REMOVE_TODO,
				payload: id,
			});
		}, 2000);

	};

};