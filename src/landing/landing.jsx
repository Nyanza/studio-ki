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
				<h1 className='title'>studio ki</h1>
			</div>
			
		</div>;
	}
}

export default Landing;
