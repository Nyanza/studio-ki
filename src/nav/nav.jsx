import React, { Component } from 'react';
import { Link } from 'react-scroll';

import Metadata from './metadata.js';
import './nav.scss';

class Nav extends Component {
	renderHome() {
		return this.renderLink(Metadata.home, 0, 'home');
	}
	renderLinks() {
		const links = Metadata.links.map((link, index) => {
			return this.renderLink(link, index, 'link');
		});
		return <div className='links'>
			{links}
		</div>
	}
	renderLink(link, index, className) {
		return <Link 
			key={index}
			className={className}
			to={link.to}
			spy={true}
			smooth={true}
			offset={0}
			duration={500} > {link.title}</Link>
	}
	render() {
		return <div className="nav">
			{this.renderHome()}
			{this.renderLinks()}
		</div>;
	}
}

export default Nav;
