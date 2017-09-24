import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Element } from 'react-scroll';
import Nav from './nav/nav.jsx';

import Metadata from './nav/metadata.js';
import './index.scss';

class App extends Component {
	renderHome() {
		return this.renderSection(Metadata.home, 0);
	}
	renderSections() {
		return Metadata.links.map((link, index) => {
			return this.renderSection(link, index);
		})
	};
	renderSection(link, index) {
		return <Element key={index} id={link.to}>
			{link.component}
		</Element>
	}
	render() {
		return <div className='main'>
			<Nav />
			{this.renderHome()}
			{this.renderSections()}
		</div>
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

