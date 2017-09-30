const SayHi = (email, message) => {
	console.log('say hi', email, message);
	email = "<b>Email:</b> "+email+"\n<b>Message</b>:\n"+message;
	return fetch("http://send-email-yaaay.herokuapp.com/sendEmail", {
	  method: "POST",
		mode: "no-cors",
	  body: JSON.stringify({message: email, subject: "Studio Ki Message", to: "misspia.leung@gmail.com"})
	});

};

export default SayHi;
