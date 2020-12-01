var express = require("express")
var router = express.Router()



const { postCategory ,getCategory ,getCategoryProd } = require("../controllers/category")


router.post("/category", postCategory)

router.get("/category", getCategory)

router.post('/categoryProd', getCategoryProd)




module.exports = router