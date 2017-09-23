import React, { Component } from 'react';

import './landing.scss';

class Landing extends Component {
	renderDiamonds(amount) {
		const diamonds = Array.apply(null, {length: amount}).map(Number.call, Number)
		return diamonds.map((diamond) => {
			return <div key={diamond} className='diamond'></div>
		})
	}
	render() {
		return <div className='landing section'>
			<div className='titleContainer'>
				{this.renderDiamonds(4)}
				<div className='title'>studio ki</div>
			</div>
			
		</div>;
	}
}

export default Landing;
