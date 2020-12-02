var express = require("express")
var router = express.Router()
const {auth} = require("../middleware/auth")


const { postCart ,getCart } = require("../controllers/cart")


router.post("/cart",auth, postCart)

router.post("/cartProducts",auth, getCart)




// router.get("/order", postOrder)

module.exports = router