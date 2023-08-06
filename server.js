const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

var nodemailer=require('nodemailer')
const transporter=nodemailer.createTransport({
    port:587,
    host:'smtp.gmail.com',
    auth:{
        user:'charmi312007@gmail.com',
        pass:'ldbwgfmzitbkoytf'
    },
    secure:true


})

server.listen(process.env.PORT || 3030);