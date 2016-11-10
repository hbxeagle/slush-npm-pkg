var defaults = require('../core/defaults.js');

module.exports = (function () {
  var prompts = [{
    name: 'name',
    message: 'What would you like to call your project?',
    default: defaults.name
  }, {
    name: 'description',
    message: 'How would you describe your project?'
  }, {
    name: 'version',
    message: 'What is the version of your project?',
    default: '0.0.1'
  }, {
    name: 'keywords',
    message: 'How would you describe your project in comma seperated key words?',
    default: 'npm package'
  }, {
    name: 'author',
    message: 'What is your company/author name?',
    default: defaults.author
  }, {
    name: 'email',
    message: 'What is your company/author email?',
    default: defaults.email
  }, {
    name: 'gitRepository',
    message: 'What is your git repository?',
    default: defaults.repositoryUrl
  }];
  return prompts;
})();
