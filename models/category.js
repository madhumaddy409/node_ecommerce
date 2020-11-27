const mongoose = require("mongoose")

var Schema = mongoose.Schema;


var categorySchema = new Schema(
    {
        categoryName:{
            type: String,
            required: true,
            maxlength: 30,
            trim: true
        },
        status: {
            type: String,
            required: true
          

        }

    });
module.exports = mongoose.model("category", categorySchema)