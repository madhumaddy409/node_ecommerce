var express = require("express")
var router = express.Router()



const { postSubCategory ,getSubCategory ,getAllSubCategories ,getsubCategoryProd } = require("../controllers/subCategory")


router.post("/subCategory", postSubCategory)

router.get("/subCategory", getSubCategory)

router.post('/subcategoryProd', getsubCategoryProd)



module.exports = router