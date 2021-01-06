
const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  message: {
    type: String,
    maxlength: 300,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }

});

// export model user with UserSchema
module.exports = mongoose.model("Message", MessageSchema);