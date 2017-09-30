import React, { Component } from 'react';

import Metadata from './metadata.js';
import Service from './service.jsx';
import './services.scss';

class Services extends Component {
	renderContent() {
		const content =  Metadata.services.map((service, index) => {
			return this.renderService(service, index);
		});
		return <div className='content'>
			{content}
		</div>
	}
	renderService(service, index) {
		return <Service
			key={index} 
			index={index}
			img={service.img}
			shadow={service.imgShadow}
			title={service.title}
			description={service.description} />
	}
	render() {
		return <div className='services section'>
			<h1>{Metadata.header}</h1>
			{this.renderContent()}
		</div>;
	}
}

export default Services;

