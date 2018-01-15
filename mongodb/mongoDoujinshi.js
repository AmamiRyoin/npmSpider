/**
 * Created by amamiryoin on 2017/12/24.
 */
let SchemaInsert = (obj) => {
    let DoujinshiSchema = require('./mongoSchema.js');
    let DoujinshiItem = new DoujinshiSchema({
        doujinshiName: obj.title,
        doujinshiAuthor: obj.author,
        doujinshiImage: obj.imageSrc,
        doujinshiLink: obj.href,
        doujinshiDownload: obj.download,
        doujinshiAuthorLink: obj.authorHref,
        doujinshiType:obj.type
    });

    DoujinshiItem.save((err, res) => {
        if (err) {
            //console.log(err);
        } else {

            //console.log(res);
        }
    });





    // let DoujinshiUpdate = ()=>{
    //     let queryStr = {'doujinshiName':'abcd'},//搜索条件
    //         upDJSArtist = {'doujinshiAtrist':'Ayumu'};//要修改的数据
    //     DoujinshiSchema.update(queryStr,upDJSArtist,{multi:true},(err,res)=>{
    //         if(err){
    //             console.log('err:',err);
    //         }else{
    //             console.log('res:',res);
    //         }
    //     })
    // }
};
module.exports = SchemaInsert;