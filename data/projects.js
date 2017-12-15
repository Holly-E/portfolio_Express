function project(tag, name, techs, description, link, image) {
  this.tag = tag
  this.name = name
  this.techs = techs
  this.description = description
  this.link = link
  this.image = image
}

var projects = [
  new project(
    "Portfolio",
    "This Portfolio!",
    ["Express", "Node.js", "JSON", "JavaScript", "HTML5", "CSS3"],
    "Use Express to populate my app with data on projects I've created",
    "https://github.com/Holly-E/portfolio_Express",
    "Portfolio.png"
  ),
  new project(
    "Player",
    "Music Player",
    ["JavaScript", "jQuery", "HTML5", "Sass", "Bootstrap"],
    "Build an interactive, functional music player", "https://github.com/Holly-E/assignment_royalty_free_music_player",
    "Player.png"
  ),
  new project(
    "jQueryEE",
    "jQuery Events and Effects",
    ["JavaScript", "jQuery", "HTML5", "CSS3"],
    "3 exercises practicing dynamic jQuery, including a photo tagging app", "https://github.com/Holly-E/assignment_jq_ee_sprint",
    "Tagger.png"
  ),
  new project(
    "Blog",
    "Blog template",
    ["Sass", "CSS3", "HTML5"],
    "Practice Sass and responsive design by recreating a picture of a blog example",
    "https://github.com/Holly-E/assignment_markup_warmup",
    "Blog.png"
  ),
  new project(
    "Server",
    "Node.js Server",
    ["Node.js", "JavaScript", "HTML5"],
    "Use node.js to create a server run on a local host and fetch request/response data",
    "https://github.com/Holly-E/build_nodejs_server",
    "Server.png"
  ),
  new project(
    "Garden",
    "Viking Garden",
    ["CSS3", "HTML55"],
    "Use CSS3 to style site, responsive to change in window size", "https://github.com/Holly-E/assignment_viking_CSS_garden",
    "Garden.png"
  ),
]

module.exports = {
  project,
  projects
}
