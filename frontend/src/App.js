import './App.scss';
import Navigation from './components/Navigation';
import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: '' };
	}

	callAPI() {
		fetch('http://localhost:5000/testAPI')
			.then((res) => res.text())
			.then((res) => this.setState({ apiResponse: res }))
			.catch((err) => err);
	}

	componentDidMount() {
		this.callAPI();
	}

	render() {
		return (
			<div className='App'>
				<Navigation />
			</div>
		);
	}
}

export default App;
