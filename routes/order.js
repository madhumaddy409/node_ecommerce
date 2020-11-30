var express = require("express")
var router = express.Router()
const {auth} = require("../middleware/auth")

const { postOrder, getOrder } = require("../controllers/order")


router.post("/order", auth, postOrder)

router.get("/order",auth, getOrder)

module.exports = router