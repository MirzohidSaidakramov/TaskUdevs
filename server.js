const express = require('express');
const app = express();
const sendMessage = require('./sendMessage');


require('./startup/db')();
require('./startup/router')(app);
 sendMessage()



const port = process.env.PORT || 5000
app.listen(port, async ()=>{
    console.log(`This app is running on ${port}`);
});


