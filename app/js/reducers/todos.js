import todosActions from 'actions/todos';
import { TODO_ACTIONS } from 'constants/TODO_ACTIONS';

let initialState = {
	complete: 0,
	incomplete: 0,
	items: [
		{ text: 'Build a Redux prototype', completed: false },
		{ text: 'Push to Github', completed: false },
		{ text: 'Fix bugs in Redux prototype', completed: false }
	]
};
let i;

for (i = 0; i < initialState.items.length; i += 1) {
	let item = initialState.items[ i ];
	let completed = item.completed;

	if (completed) {
		initialState.complete += 1;
	}
	else {
		initialState.incomplete += 1;
	}
}

export default function todos(state = initialState, action) {
	let type = action.type;

	switch (type) {
		case TODO_ACTIONS.ADD_TODO:
			return Object.assign({}, state, {
				incomplete: state.incomplete += 1,
				items: [ ...state.items, {
					text: action.text,
					completed: false
				}]
			});
		case TODO_ACTIONS.MARK_TODO:
			let index = action.index;
			let currentStatus = state.items[ index ].completed
			let complete;
			let incomplete;

			if (currentStatus) {
				complete = state.complete -= 1;
				incomplete = state.incomplete += 1;
			}
			else {
				complete = state.complete += 1;
				incomplete = state.incomplete -= 1;
			}

			return Object.assign({}, state, {
				complete,
				incomplete,
				items: [
					...state.items.slice(0, index),
					Object.assign({}, state.items[ index ], {
						completed: !currentStatus
					}),
					...state.items.slice(index + 1)
				]
			});
		default:
			return state;
	}
}