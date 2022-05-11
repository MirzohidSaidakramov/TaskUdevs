const fetch = require('node-fetch');
const Message = require('./models/message_model');

const token = `5317604590:AAFiGKWXniY_QrKWJbPXxTDANE0PBYNntVU`;
const chatId = '-1001589664624'
module.exports = async function () {
    
    const wait = value => new Promise(resolve => setTimeout(() => resolve(), value))

    const message = async (priority) => {
        const messages = await Message.find({
            priority: priority
        });
        messages.forEach(async (item, i) => {
            await wait(55000 * i);
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
            const res1 = await res.json();
            console.log(res1);
        })
        await wait(55000 * messages.length - 1)
    }
    message('high');
    message('medium');
    message('low');
}
