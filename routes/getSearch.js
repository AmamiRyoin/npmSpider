/**
 * Created by amamiryoin on 2017/12/30.
 */
// let doujinshi = require('../mongodb/mongoSchema');
let express = require('express');
let app = express();
app.get('/api/doujinshi/search', (req, res) => {
    let _res = res;
    let _query = req.query;
    // let doujinshiName = _query.doujinshiName ? new RegExp(_query.doujinshiName) : null; //转换成正则以便模糊查询
    // doujinshi.find({ doujinshiName: doujinshiName }, (err, res) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log(res);
    //         _res.send(res);
    //     }
    // })
    console.log(_query);
    _res.send(_query);
});
app.listen(3000, 'localhost');