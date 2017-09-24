import React, { Component } from 'react';

class Project extends Component {
	containerStyles() {
		return {
			// backgroundImage: `url(${this.props.imgSrc})`,
			// [this.offset()]: 'auto'
		}
	}
	isEven() {
		return this.props.index % 2 == 0;
	}
	offset() {
		return this.isEven() ? 'marginRight' : 'marginLeft'; 
	}
	render() {
		return <div className='project'>
			<a className='container' href={this.props.demoSrc}  style={this.containerStyles()}>
				<div className='category'>
					{this.props.category}
				</div>
				<div className='containerInner'>
					
					<div className='title'>
						{this.props.title}
					</div>
					
					<div className='description'>
						{this.props.description}
					</div>
				</div>
			</a>
		</div>;
	}
}

Project.defaultProps = {
	index: 0,
	title: '',
	category: '',
	demoSrc: '',
	imgSrc: '',
	description: ''
};

export default Project;

