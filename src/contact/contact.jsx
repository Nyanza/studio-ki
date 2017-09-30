import React, { Component } from 'react';

import SayHi from './sayHi.js';
import Metadata from './metadata.js';
import './contact.scss';

class Contact extends Component {
	constructor() {
		super();
		this.state = {
			sender: '',
			message: '',
			sendState: 'send'
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
		return <button
			className={`submit ${this.isDisabled() ? 'disabled' : 'enabled'}`}
			onClick={this.handleSubmit}>
				{this.state.sendState}
			</button>
	}
	isDisabled() {
		return !(this.state.sender.length > 0 && this.state.message.length > 0);
	}
	handleChange(e, path) {
		this.setState({
			[path]: e.target.value
		});
	}
	handleSubmit() {
		this.setState({ sendState: 'sending...'})
		SayHi(this.state.sender, this.state.message)
			 .then((res) => {
				 if (res.status == 200) {
				 		this.setState({
				 			sender: '',
				 			message: '',
				 			sendState: 'sent!'
				 		})
					} else {
						this.setState({ sendState: 'try again :S'})
					}
			 })
	}
	render() {
		return <div className='contact section'>
			<h1>{Metadata.title}</h1>
			<div className='description'>{Metadata.description}</div>
			{this.renderContent()}
		</div>;
	}
}

export default Contact;
