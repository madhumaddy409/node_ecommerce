const mongoose = require("mongoose")

var Schema = mongoose.Schema;


var cartSchema = new Schema(
    {
        product_id:{
            type: Schema.Types.ObjectId,
            ref:"Products"
        },
        user_id:{
            type: Schema.Types.ObjectId,
            ref:"User"
        },
        quantity:{
            type: Number,
            required:true

        }
    }
);

module.exports = mongoose.model("cartProducts", cartSchema)