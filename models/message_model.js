const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
        text:{
            type:String,
            required:true
        },
        priority:{
            type:String,
            default:'low',
            required:true


        }


})
const Message = mongoose.model('message',messageSchema);
module.exports = Message;