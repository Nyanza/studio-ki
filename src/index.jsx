import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Landing from './landing/landing.jsx';
import Services from './services/services.jsx';
import Portfolio from './portfolio/portfolio.jsx';
import Contact from './contact/contact.jsx';

import './index.scss';

class App extends Component {
	render() {
		return <div className="main">
			<Landing />
			<Services />
		</div>;
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

