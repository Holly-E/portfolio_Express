function project(tag, name, techs, description, link) {
  this.tag = tag
  this.name = name
  this.techs = techs
  this.description = description
  this.link = link
  //this.image = image
}

var projects = [
  new project("Portfolio", "This Portfolio!", ["Express", "Node.js", "JSON", "JavaScript", "HTML", "SASS"], "Use Express to populate my app with data on projects I've created", "https://github.com/Holly-E/portfolio_Express"),
  new project("Player", "Music Player", ["JavaScript", "jQuery", "HTML", "CSS", "Bootstrap"], "Build an interactive, functional music player", "https://github.com/Holly-E/assignment_royalty_free_music_player"),
  new project("jQueryEE", "jQuery Events and Effects", ["JavaScript", "jQuery", "HTML", "CSS"], "3 exercises practicing dynamic jQuery, including a photo tagging app", "https://github.com/Holly-E/assignment_jq_ee_sprint/tree/master/the_dropdown"),
  new project("Blog", "Blog template", ["Sass", "CSS", "HTML"], "Practice Sass and responsive design by recreating a picture of a blog example", "https://github.com/Holly-E/assignment_markup_warmup"),
  new project("Server", "Node.js Server", ["Node.js", "JavaScript", "HTML"], "Use node.js to create a server run on a local host and fetch request/response data", "https://github.com/Holly-E/build_nodejs_server"),
  new project("Garden", "Viking Garden", ["CSS3", "HTML5"], "Use CSS to style site, responsive to change in window size", "https://github.com/Holly-E/assignment_viking_css_garden"),
]

module.exports = {
  project,
  projects
}
