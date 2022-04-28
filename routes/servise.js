const express = require('express');
const router = express.Router();
const Message = require('../models/message_model');




/**
 * @swagger
 * /api/service/:
 *   POST:
 *     description: Create message for sending to a telegram channel/group.
 *     responses:
 *       201:
 *         description: Message has created.
 */
router.post('',async (req,res)=>{
    const message =  new Message( {
        text:req.body.text,
        priority:req.body.priority
    })
    const savedMessage = await message.save();
    res.send('Message has created').status(201);
})

module.exports = router;