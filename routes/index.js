var express = require('express');
var router = express.Router();
let projects = require('../data/projects').projects

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { projects: projects });
});

module.exports = router;
