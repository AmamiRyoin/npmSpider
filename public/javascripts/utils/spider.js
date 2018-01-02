/**
 * Created by amamiryoin on 2017/4/18.
 */
let express = require("express");
let http = require("http");
let request = require("request");
let async = require('async');
let cheerio = require("cheerio");
let fs = require('fs');
let SchemaInsert = require('../../../mongodb/mongoDoujinshi');
let eHentaiSpider = () => {
    for (let i = 0; i < 40; i++) { //默认收集前40页的内容
        // let infos = []; //收集当前页中的所有本子的信息
        let url = 'https://e-hentai.org/?page=' + i + '&f_doujinshi=1&f_manga=1&f_artistcg=1&f_gamecg=1&f_western=1&f_non-h=1&f_imageset=1&f_cosplay=1&f_asianporn=1&f_misc=1&f_search=df&f_apply=Apply+Filter';
        // let writeFile = fs.createWriteStream('build/infos/info' + i + '.json');
        new Promise(function(resolve, reject) {
            request(url, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(body);
                } else {
                    reject(body);
                }
            });
        }).then(function(value) {
            let $ = cheerio.load(value);
            let trs = $(".itg tr");
            let a;
            trs.each((index, item) => {
                if ($(item).attr('class')) {
                    let _title = $(item).find(".it5").text();
                    let _href = $(item).find(".it5").find("a").attr('href');
                    let _imageSrc;
                    if ($(item).find(".it2").text()) {
                        _imageSrc = imageUtil($(item).find(".it2").text());
                    } else {
                        _imageSrc = $(item).find(".it2").find("img").attr("src");
                    }
                    let _downloadHref = $(item).find(".it3").find("a").attr("href");
                    let _author = $(item).find(".itu").text();
                    let _authorHref = $(item).find(".itu").find('a').attr("href");
                    SchemaInsert({
                        title: _title,
                        imageSrc: _imageSrc,
                        href: _href,
                        download: _downloadHref !== undefined ? _downloadHref : '',
                        author: _author,
                        authorHref: _authorHref
                    });
                    // infos.push({
                    //     title: _title,
                    //     imageSrc: _imageSrc,
                    //     href: _href,
                    //     download: _downloadHref !== undefined ? _downloadHref : '',
                    //     author: _author,
                    //     authorHref: _authorHref
                    // });
                }
            });
            // writeFile.write(JSON.stringify(infos));
            // writeFile.end();
        });
    }
};
// module.exports = eHentaiSpider;
eHentaiSpider();
let imageUtil = (imageSrcCode) => {
    //将图片地址源码转换成图片地址
    let imageUrlCode = imageSrcCode.split(".jpg")[0].replace(/inits~/, 'https://').replace(/~/, '/') + '.jpg';
    return imageUrlCode;
};

let download = (url, dir, filename) => {
    request.head(url, function(err, res, body) {
        request(url).pipe(fs.createWriteStream(dir + "/" + filename));
    });
};