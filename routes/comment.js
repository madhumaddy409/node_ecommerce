var express = require("express")
var router = express.Router()
const {auth} = require("../middleware/auth")

const { postComment, getComment } = require("../controllers/comment")


router.post("/comment", auth, postComment)

// router.get("/comment", getComment)

module.exports = router