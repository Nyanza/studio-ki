import React, { Component } from 'react';

class Services extends Component {
	render() {
		return <div className='service'>
			<div className='icon'>
				{this.props.icon}
			</div>
			<div className='description'>
				{this.props.description}
			</div>
		</div>;
	}
}

Services.defaultProps = {
	icon: '',
	description: ''
}

export default Services;

