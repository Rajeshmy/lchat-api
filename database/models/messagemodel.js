
const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    sender:'string',
    message:'string',
    receiver:'string'
})

const Message = new mongoose.model('messages',messageSchema);

module.exports = Message;