'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const List = require('../model/list.js');
const listRouter = module.exports = new Router();


listRouter.get('/api/list/random', function(req, res, next){
  List.count().exec(function (err, count) {
   var random = Math.floor(Math.random() * count)
  List.findOne().skip(random).exec(
    function (err, result) {
      res.json(result);
      })
    })
});

listRouter.get('/api/list/:page', jsonParser, function(req, res, next){
  List.find({}, function(err, colors){
        if(err){
          res.json(err);
        } else{
          res.json(colors);
        }
    }).skip((req.params.page * 12) - 12).limit(12)
});

listRouter.get('/api/list/colorGroup/:color/:page', jsonParser, function(req, res, next){
  List.find({colorGroup : req.params.color}, function(err, colors){
        if(err){
          res.json(err);
        } else{
          res.json(colors);
        }
    }).skip((req.params.page * 12) - 12).limit(12)
});

listRouter.get('/api/list/search/:query/:page', jsonParser, function(req, res, next){
  if (req.params.query === "gray") req.params.query = "grey";
  List.find({$or : [ { colorGroup: req.params.query }, { hex: req.params.query } ]}, function(err, colors){
        if(err){
          res.json(err);
        } else{
          res.json(colors);
        }
    }).skip((req.params.page * 12) - 12).limit(12)
});




listRouter.get('/api/list/:id', function(req, res, next){
  List.findById(req.params.id)
  .then( list => res.json(list))
  .catch(next);
});


listRouter.post('/api/list', jsonParser, function(req, res, next){
  new List(req.body).save()
  .then( list => res.json(list))
  .catch(next);
});
