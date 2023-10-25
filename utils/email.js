const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //Create a transponter
  const transponter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '167618ab4be59e',
      pass: 'a4b6ec843ad46f',
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
