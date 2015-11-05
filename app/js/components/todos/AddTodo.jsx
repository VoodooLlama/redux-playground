import ReactDOM from 'react-dom';
import React from 'react';

let AddTodo = React.createClass({
	handleClick() {
		let { onAddTodoClick } = this.props;
		let inputNode = ReactDOM.findDOMNode(this.refs.input);
		let value = inputNode.value;

		if (value) {
			onAddTodoClick(value);
		}
	},

	render() {

		return (
			<div>
				<input type='text' ref='input' />
				<button onClick={ this.handleClick }>Add Todo</button>
			</div>
		);
	}
});

export default AddTodo;