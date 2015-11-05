import Navigation from 'components/global/Navigation.jsx';
import { Provider } from 'react-redux';
import React from 'react';
import { Router } from 'react-router';
import store from 'store';

let App = React.createClass({
	render() {
		return (
			<Provider store={ store }>
				<div>
					<Navigation />
					{ this.props.children }
				</div>
			</Provider>
		);
	}
});

export default App;