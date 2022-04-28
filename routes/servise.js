const express = require('express');
const router = express.Router();
const Message = require('../models/message_model');




/**
 * @swagger
 *     paths:         
 *         /api/service: 
 *                 post:
 *                  summary: Creates a new message for sending Telegram
 *                  consumes:
 *                       - application/json
 *                  requestBody:
 *                  parameters:
 *                       - in: body
 *                         name: Message
 *                         description: The message to create.
 *                         schema:
 *                             $ref: '#/definitions/Message'
 *                  responses:
 *                       201:
 *                           description: Message has created
 *                  definitions:
 *                         Message: 
 *                             type: object
 *                         required:
 *                             - text
 *                         properties:
 *                             text:
 *                              type: string
 *                             priority:
 *                              type: string
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