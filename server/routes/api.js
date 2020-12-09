var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/world', function(req, res, next) {
  console.log("router Test world")
  res.send({ message: "Hello api Express!" });
  // res.render('index', { title: 'Express' });
});

module.exports = router;
