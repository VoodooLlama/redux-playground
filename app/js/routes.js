import Todos from 'components/views/Todos.jsx';
import App from 'components/global/App.jsx';
import Contact from 'components/views/Contact.jsx';
import Home from 'components/views/Home.jsx';
import { createHistory } from 'history'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import store from 'store';

let history = createHistory({
	queryKey: false
});

ReactDOM.render((
	<Provider store={ store }>
		<Router history={ history }>
			<Route component={ App }>
				<Route path='/' component={ Home } />
				<Route path='todos' component={ Todos } />
				<Route path='contact' component={ Contact } />
			</Route>
		</Router>
	</Provider>
), document.getElementById('root'));