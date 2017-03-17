var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var models = require('../models')
var Place = models.Place;
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var db = models.db;

router.get('/', function(req, res, next){
  Promise.all([Hotel.findAll({}), Restaurant.findAll({}), Activity.findAll({})])
  .spread(function(hotels, restaurants, activities ){    
    res.render('index', {restaurants: restaurants, activities: activities, hotels: hotels});
  })
  .catch(next);

});




module.exports = router;
