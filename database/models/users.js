const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    gmail: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
        required: true
    }
},{timestamps:true})

const User = new mongoose.model('User',userSchema);

module.exports = User;