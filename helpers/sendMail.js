const nodemailer = require("nodemailer");
require("dotenv").config();

const emailMain = process.env.emailMain;
const password = process.env.password;

module.exports.sendMail = (email, uniqueString) => {
    var transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            email: emailMain,
            password,
        },
    });

    console.log("transport", transport);
    var mailOptions;
    let sender = "Cryptx";
    mailOptions = {
        from: sender,
        to: email,
        subject: "Email Verification",
        html: `Thank you for registering on CryptX 
            .Please verify your email <a href=https://cryptx.azurewebsites.net/user/verify/${uniqueString}>here</a>`,
    };

    transport.sendMail(mailOptions, (err, response) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Message Sent");
            console.log(response, "response");
        }
    });
};
