const express = require('express');
const router = express.Router();

router.get('',(res,req)=>{
    res.send('This is a a server that sends messages to a telegram channel/group using a telegram bot token')
})
module.exports = router;