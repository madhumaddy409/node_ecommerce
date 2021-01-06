const { query } = require("express");
const User = require("../models/user")
const Message = require("../models/message")
const {auth} = require("../middleware/auth");



exports.postMessage = (req, res) => {
    const message = new Message(req.body)
    message.save((err, cart) => {
        if(err) {
            return res.status(400).json({
                err: "Data not saved in DB"
            })
        }
        res.json(message)

    });
  
};


exports.getMessage =(req, res) => {
    Message.find({},(err, messages)=> {
        res.send(messages);
    })
}