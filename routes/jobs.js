var mongo = require('mongoskin');
var mon = require('mongodb');
var express = require('express');
var router = express.Router();
/* GET home page. */
    
var db = mongo.db('mongodb://localhost:27017/SwiftHire',{native_parser:true});

router.get('/', function(req, res, next) {
  
  db.bind('jobs');
   db.jobs.find({}).toArray(function(err, item){ 
     console.log(item)
  //res.render('jobs', {jobs:obj, title:"Jobs Table"} )
    res.json({jobs: item})
   });
});
  db.close();

 

module.exports = router;














