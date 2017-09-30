const router = require('express').Router();
const path = require('path');
const nodemailer = require('nodemailer');
const ROOT_PATH = __dirname + '/../'
const local = require(path.resolve(ROOT_PATH, 'local.json'));

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: local.email,
        pass: local.email_pass
    }
});

router.post('/', (req, res) => {

  console.log(req.body)
  var mailOptions = {
    from: 'sibtain462@gmail.com', // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    html: '<b>Email:</b> ' + req.body.email + `
         <br><b>Message:</b><br>` + req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        res.status(400).json({res: error});
    } else {
        console.log('Message sent: ' + info.response);
        res.status(200).json({res: info.response});
    };
  });

});

module.exports = router;
