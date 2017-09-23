import React, { Component } from 'react';

import Metadata from './metadata.js';

import './nav.scss';

class Nav extends Component {
	renderLinks() {
		const links = Metadata.links.map((link, index) => {
			return this.renderLink(link, index);
		});
		return <div className='links'>
			{links}
		</div>
	}
	renderLink(link, index) {
		return <div key={index} className='link'>
			{link.title}
		</div>
	}
	render() {
		return <div className="nav">
			<div className='title'>
				{Metadata.title}
			</div>
			{this.renderLinks()}
		</div>;
	}
}

export default Nav;

