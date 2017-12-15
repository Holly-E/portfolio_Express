var express = require('express');
var router = express.Router();
let projects = require('../data/projects').projects

 function findProject(tag) {
   return projects.find(function(project) {
     return tag == project.tag
   })
}

router.get('/:tag', function(req, res, next) {
  var project = findProject(req.params.tag)
  res.render('about', {project: project});
  next();
});

module.exports = router;
