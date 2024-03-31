const Message = require("../database/models/messagemodel")

const sendMessage=async(req,res)=>{
    if(!req.user) res.end("you are not authorised");
    const message = req.body;
    const msg = new Message(message)
    msg.save().then(savedMessage => {
        console.log('New message saved successfully:', savedMessage);
    })
    .catch(error => {
        console.error('Error saving message:', error);
    });
    console.log(message)
    res.json('acknowledged: recieved message')
}

module.exports = {sendMessage};