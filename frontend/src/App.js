import './App.scss';
import Navigation from './components/Navigation';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = ({ auth }) => {
	useEffect(() => {
		store.dispatch(loadUser());
		store.dispatch(loadTasks());
	}, []);

	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<Navigation />
					</Route>
					{/* <Route exact path="/cards" component={ () => <Cards />} /> */}
				</Switch>
			</div>
		</Router>
	);
};

export default App;
