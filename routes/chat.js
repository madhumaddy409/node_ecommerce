var express = require("express")
var router = express.Router()
const {auth} = require("../middleware/auth")

const { postMessage, getMessage } = require("../controllers/chat")


router.post("/message", auth, postMessage)

router.get("/message",auth, getMessage)

module.exports = router