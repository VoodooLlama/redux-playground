import React from 'react';

let TodosList = React.createClass({
	onMarkTodoClick(index) {
		let { onMarkTodoClick } = this.props;

		onMarkTodoClick(index);
	},

	buildCompletedString(completed) {
		return completed ? ' not completed' : ' completed';
	},

	render() {
		let { complete, incomplete, items } = this.props.todos;

		return (
			<div className='todo-list'>
				<div className='status'>
					Total todos: <strong>{ items.length }</strong>
					<br />
					<br />
					Total complete: <strong>{ complete }</strong>
					<br />
					Total incomplete: <strong>{ incomplete }</strong>
				</div>

				<br />

				{
					items.map((item, i) => 
						<div className='todo' key={ i }>
							{ item.text } <strong>{ this.buildCompletedString(!item.completed) }</strong>

							<button onClick={ (index) => this.onMarkTodoClick(i) }>
								Mark { this.buildCompletedString(item.completed) }
							</button>
						</div>
					)
				}
			</div>
		);
	}
});

export default TodosList;