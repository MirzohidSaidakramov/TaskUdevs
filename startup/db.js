const mongoose = require('mongoose');
const config = require('config');
module.exports = function (){
    mongoose.connect('mongodb://localhost/task')
    .then(()=>{
        console.log('app has connected database');
    })
    .catch(()=>{
        console.log('Connecting to database is error');
    })
}