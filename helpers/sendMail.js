require("dotenv").config();
const sendgrid = require('@sendgrid/mail');

module.exports.sendMail = (email,uniqueString) => {
    const SENDGRID_API_KEY = process.env.API_KEY;
    
    sendgrid.setApiKey(SENDGRID_API_KEY);
    
    const msg = {
        to: email,
        // Change to your recipient
        from: 'cryptxmuj@gmail.com',
        // Change to your verified sender
        subject: "Email Verification",
        html: `Thank you for registering on CryptX 
        .Please verify your email <a clicktracking="off" href=http://localhost:5000/user/verify/${uniqueString}>here</a>`,
        text:"hello"
    }
    
    sendgrid
        .send(msg)
        .then((resp) => {
            console.log('Email sent\n', resp)
        })
        .catch((error) => {
            console.error(error)
    })
}

