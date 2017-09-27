import React, { Component } from 'react';

class Project extends Component {
	render() {
		return <a className='project' href={this.props.demoSrc} >
			<img className='image' src={this.props.imgSrc} /> 
			<div className='about'>
				<h3 className='title'>{this.props.title}</h3>
				<div className='description'>{this.props.description}</div>
			</div>
		</a>;
	}
}

Project.defaultProps = {
	index: 0,
	title: '',
	demoSrc: '',
	imgSrc: '',
	description: ''
};

export default Project;

