/**
 * Created by amamiryoin on 2017/12/30.
 */
let doujinshi = require('../mongodb/mongoSchema');
let express = require('express');
let app = express();
app.get('/api/doujinshi/search', (req, res) => {
    let _res = res;
    let _query = req.query;
    let doujinshiName = new RegExp(_query.doujinshiName); //转换成正则以便模糊查询
    doujinshi.find({ doujinshiName: doujinshiName }, (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log(res);
            _res.send(res);
        }
    })
    console.log(req.query);
});
app.listen(8082, 'localhost');