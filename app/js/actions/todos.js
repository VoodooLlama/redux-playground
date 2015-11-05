import { TODO_ACTIONS } from 'constants/TODO_ACTIONS';

export function addTodo(text) {
	return {
		type: TODO_ACTIONS.ADD_TODO,
		text
	}
}

export function markTodo(index) {
	return {
		type: TODO_ACTIONS.MARK_TODO,
		index
	}
}