const mongoose = require("mongoose")

var Schema = mongoose.Schema;


var subcategorySchema = new Schema(
    {
        categoryId:{
            
                type: Schema.Types.ObjectId,
                ref:"category"
            

        },
        categoryName:{
            
            type: String,
            required: true
        },
        subCategoryName:{
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
module.exports = mongoose.model("subcategory", subcategorySchema)