/**
 * Created by amamiryoin on 2017/12/30.
 */
let express = require('express');
let app = express();
app.get('/api/doujinshi/search',(req,res)=>{
    res.send(req.query)
});
app.listen(8081,'localhost');