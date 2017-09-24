import React, { Component } from 'react';

import Metadata from './metadata.js';
import './contact.scss';

class Contact extends Component {
	constructor() {
		super();
		this.state = {
			sender: '',
			message: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	renderContent() {
		return <div className='content'>
			{this.renderSenderField()}
			{this.renderMessageField()}
			{this.renderSubmitButton()}
		</div>
	}
	renderSenderField() {
		return <input 
			type="text"
			className='senderField'
			placeholder={Metadata.senderField}
			value={this.state.sender}
			onChange={(e) => this.handleChange(e, 'sender')}/>
	}
	renderMessageField() {
		return <textarea
			className='messageField'
			placeholder={Metadata.messageField}
			value={this.state.message}
			onChange={(e) => this.handleChange(e, 'message')}/>;
	}
	renderSubmitButton() {
		return <div className='submit' onClick={this.handleSubmit}>
				{Metadata.submit}
			</div>
	}
	handleChange(e, path) {
		this.setState({
			[path]: e.target.value
		});
	}
	handleSubmit() {
		//send data stored in state
	}
	render() {
		console.log(this.state.sender, this.state.message)
		return <div className='contact section'>
			<h1>{Metadata.title}</h1>
			<div className='description'>{Metadata.description}</div>
			{this.renderContent()}
		</div>;
	}
}

export default Contact;

