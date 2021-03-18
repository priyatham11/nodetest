const nodemailer= require( 'nodemailer');
const dotenv =require('dotenv');
dotenv.config();

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
});
module.exports = function sendEmail( message) {
    const mailOptions = {
        from:'spamprism9866@gmail.com',
        to:'spamprism9866@gmail.com',
        subject:'new employee addition',
        html: message,
    };
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
    });
};