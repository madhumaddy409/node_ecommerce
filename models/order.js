const mongoose = require("mongoose")

var Schema = mongoose.Schema;


var orderSchema = new Schema(
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

        },
        orderType:{
            type: String,
            required:true

        },
        userName:{
            type: String,
            required:true

        },
        PhoneNumber:{
            type: Number,
            required:true

        },
        city:{
            type: String,
            required:true

        },
        State:{
            type: String,
            required:true

        },
        Address:{
            type: String,
            maxlength: 350,
            required:true

        },
        orderedAt: {
            type: Date,
            default: Date.now()
        },
        Status:{
            type: String,
            required:true

        },
          
        
    }
);

module.exports = mongoose.model("orderProducts", orderSchema)