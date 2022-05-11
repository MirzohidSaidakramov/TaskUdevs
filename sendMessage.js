const fetch = require('node-fetch');
const Message = require('./models/message_model');

const token = `5317604590:AAFiGKWXniY_QrKWJbPXxTDANE0PBYNntVU`;
const chatId = '-1001589664624'
module.exports = async function () {
    
    const wait = value => new Promise(resolve => setTimeout(() => resolve(), value))

    const messages = await Message.find();
    const priority = ['high', 'medium', 'low'];
    const messageSort =  messages.sort((x, y) => priority.indexOf(x.priority) - priority.indexOf(y.priority));
    console.log(messageSort);

    const message = async (message) => {
       
        message.forEach(async (item, i) => {
            await wait(5000 * i);
            let res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: item.text
                })
            });
           
            
        })
        await wait(5000 * messages.length - 1)
    }
    message(messageSort)
}