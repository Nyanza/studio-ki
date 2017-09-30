const express = require("express")
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;

// All access from localhost for dev
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const MailRouter = require('./routes/mail.js');
app.use('/api/v1/mail', MailRouter);

app.use('/dist', express.static(path.join(__dirname, '/../dist')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/../index.html')) );

app.listen(port, () => {
	console.log('Listening on port ', port);
});
