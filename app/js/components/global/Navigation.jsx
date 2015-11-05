import { connect } from 'react-redux';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';

function selector(state) {
	return {
		state
	}
};

let Navigation = React.createClass({
	render() {
		return (
			<ul>
				<li><Link to='/' activeClassName='active'>Home</Link></li>
				<li><Link to='/todos' activeClassName='active'>Todos</Link></li>
				<li><Link to='/contact' activeClassName='active'>Contact</Link></li>
			</ul>
		);
	}
});

export default connect(selector)(Navigation);