url = require 'url'

module.exports = 
  withRegex: (req, regex) ->
    pathName = url.parse(req.url).pathname
    pathName.match regex
