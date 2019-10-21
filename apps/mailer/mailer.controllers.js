const transporter = require("../../config/transporter")

const send = async (req, res) => {
    try {
        transporter.sendMail(
            {
                from: "user.verifier.bot@gmail.com",
                to: req.body.to,
                subject: req.body.subject,
                text: req.body.text
            },
            (err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: "Error ocurred!",
                        err: err
                    })
                }
                return res.status(200).json({
                    message: "Mail sent!",
                    result: data
                })
            }
        )
    } catch (e) {
        return res.status(400).json({
            error: "Error ocurred!",
            err: e
        })
    }
}

module.exports = { send }
