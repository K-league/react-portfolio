const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');

nodemailer.createTransport({
    host: "gmail.com",
    //BE 8000, FE 3000
    port: 8000,
})
