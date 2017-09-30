const SayHi = (email, message) => {
	return fetch("http://localhost:8000/api/v1/mail", {
	  method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
	  body: JSON.stringify({
			email: email,
			message: message,
			subject: "Studio Ki Message",
			to: "misspia.leung@gmail.com"
		})
	});

};

export default SayHi;
