module.exports = (function () {
  var prompts = [{
    name: 'stack',
    type: 'list',
    message: 'What stack would you like to use?',
    choices: ['Command', 'Node', 'Browser', 'Node&Command']
  }];
  return prompts;
})();
