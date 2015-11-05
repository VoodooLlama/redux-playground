import Todos from 'components/views/Todos.jsx';
import App from 'components/global/App.jsx';
import Contact from 'components/views/Contact.jsx';
import Home from 'components/views/Home.jsx';
import { createHistory } from 'history'
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

let history = createHistory({
	queryKey: false
});

ReactDOM.render((
	<Router history={ history }>
		<Route component={ App }>
			<Route path='/' component={ Home } />
			<Route path='/todos' component={ Todos } />
			<Route path='/contact' component={ Contact } />
		</Route>
	</Router>
), document.getElementById('root'));