import React, { Component } from 'react';

import Metadata from './metadata.js';
import './landing.scss';

class Landing extends Component {
	render() {
		return <div className='landing section'>
			<img className='image' src={Metadata.imgSrc} alt=""/>
			<div className='about'>
				<h2 className='title'>{Metadata.title}</h2>
				<div className='tagline'>{Metadata.tagline}</div>
				<div className='button'>{Metadata.btntxt}</div>
			</div>
			
		</div>;
	}
}

export default Landing;
