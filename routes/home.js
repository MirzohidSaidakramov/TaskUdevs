const express = require('express');
const router = express.Router();
const sendMessage = require('../sendMessage');

router.get('/',(req, res)=>{
    res.send('this is a a server that sends messages to a telegram channel/group using a telegram bot token');
    

});
/**
 * @swagger
 *  /send:
 *      get:
 *        summary: sending Telegram
 *      responses:
 *        200:
 *           description: Messages are sending...
 */

router.get('/send',(req,res)=>{
    res.send('Messages are sending...')
    sendMessage();
})

module.exports = router;