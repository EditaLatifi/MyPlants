const Mailgen = require('mailgen');
const nodemailer = require('nodemailer');

/** send mail from real gmail account */
const contactForm = (req, res) => {

    const { name, email, message } = req.body;
    let config = {
        service : 'gmail',
        auth : {
            user: "ee3944978@gmail.com",
            pass: "woxh hhor nlbw hzju"
        }
    }

    let transporter = nodemailer.createTransport(config);

    let enailToBeSend = {
        from : email,
        to : "ee3944978@gmail.com",
        subject: name,
        html: "From: " + email + "<br>" +message
    }

    transporter.sendMail(enailToBeSend).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
}


module.exports = {
    contactForm
}