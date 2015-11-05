import AddTodo from 'components/todos/AddTodo.jsx';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import React from 'react';
import { addTodo, markTodo } from 'actions/todos';
import TodosList from 'components/todos/TodosList.jsx';

let Todos = React.createClass({
	onAddTodoClick(text) {
		let { dispatch } = this.props;

		dispatch(addTodo(text));
	},

	onMarkTodoClick(index) {
		let { dispatch } = this.props;

		dispatch(markTodo(index));
	},

	render() {
		let { todos } = this.props;

		return (
			<div className='todos'>
				<Link to='/todos' activeClassName='active'>Todos</Link>
				<AddTodo onAddTodoClick={ this.onAddTodoClick } />
				<br />
				<TodosList todos={ todos } onMarkTodoClick={ this.onMarkTodoClick } />
			</div>
		);
	}
});

function setGlobalState(store) {
	return {
		todos: store.todos
	}
}

export default connect(setGlobalState)(Todos);