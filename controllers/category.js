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
    const catProducts = await Products.find({query})
    if(catProducts)
    {
      res.send(catProducts)
    }
    else{
      res.status(404)
    }

}
 

// exports.getCategoryProd = async (req, res) => {
//   var MongoClient = require('mongodb').MongoClient;
//   var url = "mongodb+srv://root:root@cluster0.ue8qu.mongodb.net/ecommerce?retryWrites=true&w=majority";

//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("ecommerce");
//     const {category} =req.body
//     console.log(category)
//     const query = {category:category }
//     dbo.collection("products").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(query);
//       res.send(result)
      
//     });
//   });
// };





