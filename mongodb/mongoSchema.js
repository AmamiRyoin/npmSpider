/**
 * Created by amamiryoin on 2017/12/24.
 */
let mongoose = require('./mongodb.js');
let Schema = mongoose.Schema;
let DoujinshiSchema = new Schema({
    doujinshiName: { type: String }, //同人志本子名,
    doujinshiAuthor: { type: String }, //同人志作者名
    doujinshiImage: { type: String }, //同人志缩略图地址
    doujinshiDownload: { type: String }, //同人志下载链接
    doujinshiAuthorLink: { type: String }, //同人志作者链接
    doujinshiLink: { type: String }, //同人志链接
    doujinshiType: { type: String } //同人志种类
});
module.exports = mongoose.model("Doujinshi", DoujinshiSchema);