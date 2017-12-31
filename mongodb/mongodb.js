/**
 * Created by amamiryoin on 2017/8/5.
 */
let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost:27017/doujinshi');
db.connection.on('error',(err)=>{
    console.log(err);
});
db.connection.on('connected',()=>{
    console.log('success')
});
module.exports = mongoose;
