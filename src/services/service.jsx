 import React, { Component } from 'react';

class Services extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	renderTemplate() {
		if(this.props.index % 2 == 0) return this.renderEvenTemplate();
		return this.renderOddTemplate();
	}
	renderEvenTemplate() {
		const style = {
			gridTemplateColumns: `1.5fr 1fr`
		};

		return <div className='service' style={style}>
			{this.renderImageCell()}
			{this.renderAboutCell()}
			
		</div>;
	}
	renderOddTemplate() {
		const style = {
			gridTemplateColumns: `1fr 1.5fr`
		};
		
		return <div className='service' style={style}>
			{this.renderAboutCell()}
			{this.renderImageCell()}
		</div>;
	}
	renderImageCell() {
		return <div className='image'>
				<img src={this.props.img} alt={this.props.title}/>
			</div>;
	}
	renderAboutCell() {
		return <div className='about'>
				<h2 className='title'>{this.props.title}</h2>
				<div className='description'>{this.props.description}</div>
				<div className='button'>get started</div>
			</div>;
	}
	handleClick() {
		console.log("service clicked");
	}
	render() {
		return this.renderTemplate();
	}
}

Services.defaultProps = {
	icon: '',
	description: ''
}

export default Services;

