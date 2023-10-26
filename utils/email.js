const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //Create a transponter
  const transponter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //Define the email options
  const mailOptions = {
    from: 'My Cool App<my-cool-app@meta.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    //html:
  };

  // Actually send the email
  await transponter.sendMail(mailOptions);
};

module.exports = sendEmail;
