const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');

let transporter = nodemailer.createTransport({
    host: "gmail.com",
    //BE 8000, FE 3000
    port: 8000,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});
//verify connection configuration
transporter.verify(function(error, success){
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take out message");
    }
});
//POST route to send conetent of the contact form
router.post('/send', (req,res, next) => {
    let name = req.body.name
    let email = req.body.email
    let subject = req.body.subject
    let message = req.body.message
    let content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message}`

    let mail = {
        from: name,
        to: "kay43540@gmail.com",
        subject: subject,
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: "fail"
            })
        } else {
            res.json({
                status: "success"
            })
        }
    })
})
