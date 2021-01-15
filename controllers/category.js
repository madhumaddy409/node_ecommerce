const { query } = require("express");
const redis = require('redis')
const {promisify} = require('util')



const Category = require("../models/category")
const Products = require("../models/products")




exports.postCategory = async (req, res) => {
    const { categoryName } = req.body;
    console.log(categoryName)
    let category = await Category.findOne({
        categoryName
      });
      if (category)
        return res.status(400).json({
          message: "category Exist"
        });

    else{
            const category = new Category(req.body)
            category.save((err, cart) => {
                if(err) {
                    return res.status(400).json({
                        err: "Data not saved in DB"
                    })
                }
                res.json(category)
            });
        }
};


exports.getCategory = async(req, res) => {
  const category =  await Category.find({});
  if(category)
  {
    res.send(category)
  }
  else{
    res.status(404)
  }
}

exports.getCategoryProd = async (req, res) => {
    const {category} =req.body
    console.log(category)
    const query = {category:category }
    const catProducts = await Products.find({category : category})
    console.log(catProducts)
    if(catProducts)
    {
      res.send(catProducts)
    }
    else{
      res.status(404)
    }

}
 





