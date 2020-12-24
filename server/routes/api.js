const express = require('express');
const router = express.Router();
const request = require('request');
const convert = require('xml-js');
const CONFIG = require('../../config/config.json');

router.get('/world', function(req, res, next) {
  console.log("router Test world")
  callWorldDataAPI(worldData => {
    let resData = convertXml(worldData);
    console.log(resData);
    res.send(resData);
  });
});

function callWorldDataAPI(callback){
  request(CONFIG.COVID_STATUS_WORLD, (error, res, body) => {
    callback(body)
  })
}

//Xml형식을 Json형식으로 변환
function convertXml(datas){
  //compact:데이터 간소화 여부, spaces:들여쓰기
  return convert.xml2json(datas,{compact: true, spaces: 4})
}

module.exports = router;
