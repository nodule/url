module.exports = {
  name: "parse",
  ns: "url",
  description: "Takes a URL string, parses it, and returns a URL object",
  phrases: {
    active: "Parsing url {{input.in}}"
  },
  ports: {
    input: {
      "in": {
        type: "string",
        title: "Url",
        description: "The URL string parse"
      }
    },
    output: {
      out: {
        title: "Out",
        type: "string"
      },
      error: {
        title: "Error",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      url: require('url')
    }
  },
  fn: function parse(input, $, output, state, done, cb, on, url) {
    var r = function() {
      output({
        out: $.write('in', url.parse($.in, true))
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}