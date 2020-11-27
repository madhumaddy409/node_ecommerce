var express = require("express")
var router = express.Router()



const { postCategory ,getCategory } = require("../controllers/category")


router.post("/category", postCategory)

router.get("/category", getCategory)




module.exports = router