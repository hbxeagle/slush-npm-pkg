module.exports = {
  stack : require('./stack.js'),
  command : require('./command.js'),
  common : require('./common.js'),
  publishs: [{
    stack: "Command",
    template: "command/**/*",
    dist: './'
  }, {
    stack: "Node&Browser",
    template: "common/**/*",
    dist: './'
  }]
}
