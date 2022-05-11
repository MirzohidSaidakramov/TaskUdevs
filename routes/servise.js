const express = require('express');
const router = express.Router();
const Message = require('../models/message_model');



/**
 * @swagger
 *      components:
 *          schemas:
 *              Message:
 *                  type: object
 *                  required:
 *                      -text
 *                      -priority
 *                  properties:
 *                      text:
 *                          type: string
 *                          description: Message's text
 *                      priority:
 *                          type: string
 *                          description: low medium high
 *                  example:
 *                      text: Assalomu alaykum
 *                      priority: low
 */

/**
 * @swagger     
 *         /api/service: 
 *                 post:
 *                  summary: Creates a new message for sending Telegram
 *                  requestBody:
 *                      required: true
 *                      content:
 *                          application/json:
 *                              schema:
 *                                   $ref: '#/components/schemas/Message'
 *                  responses:
 *                       201:
 *                           description: Message has created
 *                
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