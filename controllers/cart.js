const { query } = require("express");
const User = require("../models/user")
const Cart = require("../models/cart")
const Product = require("../models/products")

const {auth} = require("../middleware/auth");
const products = require("../models/products");


exports.postCart = async(req, res) => {
    const { product_id ,user_id ,quantity} = req.body;
    

    let cart = await Cart.findOne({
        product_id,user_id
      });
      if (cart)
        return res.status(400).json({
          message: "alread in cart"
          
        });
        else{
            const cart = new Cart(req.body)
            cart.save((err, cart) => {
                if(err) {
                    return res.status(400).json({
                        err: "Data not saved in DB"
                    })
                }
                res.json(cart)
                // message: "item added to cart"
            });
            
    }    
};


exports.getCart = async (req, res) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://root:root@cluster0.ue8qu.mongodb.net/ecommerce?retryWrites=true&w=majority";
    // var url = "mongodb://localhost:27017/";
    const user = await User.findById(req.user.id);
    // res.json(user);
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("ecommerce");
      var query = {user_id:user._id }
      dbo.collection("cartproducts").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(query);
        console.log(result)

      var products = [];
     
      result.forEach(productId)

      function productId(item,i)
      {
        products[i] = item.product_id
      }
      
      console.log(products)
      res.send(products)
    
        
        
      });
    });
};