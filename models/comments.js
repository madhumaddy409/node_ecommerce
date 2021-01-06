const mongoose = require("mongoose")

var Schema = mongoose.Schema;


var commentsSchema = new Schema(
    {
        
        user_id:{
            type: Schema.Types.ObjectId,
            ref:"User"
        },
        comment:{
            type:String,
            required: true,
            maxlength: 50,
            trim: true

        },
        commented_on:{
            type:Date,
            default:Date.now()
        }
      
    })

    module.exports = mongoose.model("comments", commentsSchema)
  