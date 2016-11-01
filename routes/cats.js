
var express = require('express')
var router = express.Router()

var catsDb = require('../db/cats')

router.get('/', function(req, res) {
  catsDb.getCats()
    .then(function(cats){
      res.render('cats', {cats: cats})
    })
    .catch(function(err){
      console.log(err)
    })
})

module.exports = router
