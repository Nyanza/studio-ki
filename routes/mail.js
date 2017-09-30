const router = require('express').Router();
const path = require('path');
const nodemailer = require('nodemailer');
const ROOT_PATH = __dirname + '/../'


const local = initializeLocal();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: local.email,
        pass: local.email_pass
    }
});

router.post('/', (req, res) => {
  var mailOptions = {
    from: local.email, // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    html: '<b>Email:</b> ' + req.body.email + `
         <br><b>Message:</b><br>` + req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        res.status(400).json({res: resp, status: 400});
    } else {
        console.log('Message sent: ' + JSON.stringify(info));
        res.status(200).json({res: info.response, status: 200});
    }
  });

});

module.exports = router;

function initializeLocal() {
  if (process.env.WEBSITE_EMAIL) {
    return {
      email: process.env.WEBSITE_EMAIL,
      email_pass: process.env.WEBSITE_PASS
    }
  } else {
    return require(path.resolve(ROOT_PATH, 'local.json'));
  }
}
