const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }
})

const send = async (req, res) => {
    try {
        const data = await transporter.sendMail({
            from: "verifier@lightweb.com",
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text
        })
        return res.status(200).json({
            message: "Mail sent!",
            result: data
        })
    } catch (e) {
        return res.status(400).json({
            error: "Error ocurred!",
            err: e
        })
    }
}

module.exports = { send }
