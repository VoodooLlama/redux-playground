import { createStore, combineReducers } from 'redux';
import todos from 'reducers/todos';

let reducers = combineReducers({
	todos
});

export default createStore(reducers);