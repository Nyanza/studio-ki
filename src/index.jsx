import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './nav/nav.jsx';
import Landing from './landing/landing.jsx';
import Services from './services/services.jsx';
import Projects from './projects/projects.jsx';
import Contact from './contact/contact.jsx';

import './index.scss';

class App extends Component {
	render() {
		return <div className="main">
			<Nav />
			<Landing />
			<Services />
			<Projects />
		</div>;
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

