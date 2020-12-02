const { query } = require("express");
const Order = require("../models/order")
const Cart = require("../models/cart")

exports.postOrder = async (req, res) => {
    const { product_id ,user_id ,quantity} = req.body;
    
    
    //deleting from the cart
    let cart = await Cart.findOneAndDelete({
        product_id,user_id
      });

     console.log(cart) 
    //adding to order table
    const order = new Order(req.body)
    order.save((err, oredr) => {
        if(err) {
            return res.status(400).json({
                err: "Data not saved in DB"
            })
        }
        res.json(order)
    });
};




exports.getOrder = async (req, res) => {
const { user_id} = req.body;
 
    let order = await Order.find({
        user_id
      });

     console.log(order)
     res.send(order)
    
}
