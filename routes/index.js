var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

router.get('/', function(req, res, next){
  res.render('index');
});




module.exports = router;
