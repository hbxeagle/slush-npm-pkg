module.exports = {
  stack : require('./stack.js'),
  command : require('./command.js'),
  common : require('./common.js'),
  publishs: [{
    stack: "Command",
    template: "command/**/*",
    dist: './'
  }, {
    stack: "Node",
    template: "node/**/*",
    dist: './'
  }, {
    stack: "Browser",
    template: "browser/**/*",
    dist: './'
  }, {
    stack: "Node&Command",
    template: "node_command/**/*",
    dist: './'
  }]
}
