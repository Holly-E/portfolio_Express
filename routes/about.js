var express = require('express');
var router = express.Router();
let projects = require('../data/projects').projects

function findProject(name) {
  return projects.find(function(project) {
    return name == project.name
  }
}

router.get('/:name', function(req, res, next) {
  var project = findProject(req.params.name)
  res.render('about', {project: project});
});

module.exports = router;
