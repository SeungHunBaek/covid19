const express = require('express');
const router = express.Router();
const request = require('request');
const convert = require('xml-js');
const WOLRD_API = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson?serviceKey=e/u5HiiZcpglw2q8nndKG60KcqEAnOaOLYiLGQJZa4klvndij7SlvvQAxvRLifAESwNq5IKZH4lVjeSd5uS/WQ==&numOfRows=1000";

router.get('/world', function(req, res, next) {
  console.log("router Test world")
  callWorldDataAPI(worldData => {
    let resData = convertXml(worldData);
    res.json(resData);
  });
});


function callWorldDataAPI(callback){
  request(WOLRD_API,(error, res, body)=>{
    callback(body)
  })
}
function convertXml(datas){
  //compact:데이터 간소화 여부, spaces:들여쓰기
  return convert.xml2json(datas,{compact: true, spaces: 4})
}

module.exports = router;
