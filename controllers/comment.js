const { query } = require("express");
const Comments = require("../models/comments")




exports.postComment = async (req, res) => {
    const {comment } = req.body
    userid = req.user
    console.log(userid)
    console.log(comment)
    res.send(comment)


}