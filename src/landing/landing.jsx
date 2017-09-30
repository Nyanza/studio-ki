import React, { Component } from 'react';
import { Link } from 'react-scroll';

import NavMetadata from '../nav/metadata.js';
import Metadata from './metadata.js';
import './landing.scss';

class Landing extends Component {
	renderButton() {
		const links = NavMetadata.links;
		const contactLink = links[links.length - 1].to;
		return <Link
			className='button'
			to={contactLink}
			spy={true}
			smooth={true}
			offset={0}
			duration={500} >{Metadata.btntxt}</Link>
	}
	render() {
		var style = {
			width: '70%'
		};
		return <div className='landing section'>
			<img className='frameImg' style={style} src={Metadata.frameImgSrc} alt=""/>
			<img className='screenImg' style={style} src={Metadata.screenImgSrc} alt=""/>
			<div className='about'>
				<h2 className='title'>{Metadata.title}</h2>
				<div className='tagline'>{Metadata.tagline}</div>
				{this.renderButton()}
			</div>

		</div>;
	}
}

export default Landing;
