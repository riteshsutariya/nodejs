var nodemailer = require("nodemailer");
require("dotenv").config();
const emailTransporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 465,
  service: "yahoo",
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  debug: false,
  logger: true,
});

var mailOptions = {
  from: process.env.MAIL_USER,
  to: process.env.MAIL_TO,
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

emailTransporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
