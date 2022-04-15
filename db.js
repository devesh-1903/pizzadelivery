const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://devesh:devesh@cluster0.y4v7q.mongodb.net/pimzza'

mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true})
var db = mongoose.connection
db.on('connected' ,()=>{
    console.log('Database connected');
})
db.on('error',()=>{
    console.log('falied');
})
module.exports=mongoose