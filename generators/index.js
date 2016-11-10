var prompts = require('../prompts/index.js');
var generator = require('../core/generator.js');

module.exports = function () {
  return generator(prompts, 'default');
}


