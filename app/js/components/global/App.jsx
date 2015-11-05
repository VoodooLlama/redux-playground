import Navigation from 'components/global/Navigation.jsx';
import React from 'react';
import { Router } from 'react-router';

let App = React.createClass({
	render() {
		return (
			<div>
				<Navigation />
				{ this.props.children }
			</div>
		);
	}
});

export default App;