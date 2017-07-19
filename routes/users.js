var mongo = require('mongoskin');
var mon = require('mongodb');
var express = require('express');
var router = express.Router();
/* GET home page. */
var db = mongo.db('mongodb://localhost:27017/SwiftHire',{native_parser:true});

router.get('/', function(req, res, next) {
  
  db.bind('users');
   db.users.find({},{_id: 0}).toArray(function(err, item){ 
     console.log(item)
  //res.render('users', {users:item, title:"Users Table"} )
    res.json({users: item})
   });
});
  router.post('/', function(req, res, next) {
  var query = {req}
  db.bind('users');
   db.users.insert(query).toArray(function(err, item){ 
     console.log(item)
  //res.render('users', {users:item, title:"Users Table"} )
    res.json({users: item})
   });
});
  db.close();

 

module.exports = router;














