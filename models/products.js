const mongoose = require("mongoose")

var Schema = mongoose.Schema;


var productSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
            maxlength: 30,
            trim: true
        },
        productImage:{
            type: String,
    
        },
        category: {
            type: String,
            required: true,
            maxlength: 50,
            trim: true
            
        },
        subCategory: {
            type: String,
            required: true,
            maxlength: 50,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true

        },
        brand: {
            type: String,
            required: true,
            trim: true

        },
        status: {
            type: String,
            required: true
          

        },
        price:{
            type: Number,
            required: true

        }        
    }
);

module.exports = mongoose.model("Products", productSchema)