// Generated by CoffeeScript 1.4.0
(function() {
  var url;

  url = require('url');

  module.exports = {
    withRegex: function(req, regex) {
      var pathName;
      pathName = url.parse(req.url).pathname;
      return pathName.match(regex);
    }
  };

}).call(this);