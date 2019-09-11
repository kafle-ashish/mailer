const express = require("express")
const { send } = require("./mailer.controllers")

const router = express.Router()

/* POST methods */
router.post("/", send)

module.exports = router
