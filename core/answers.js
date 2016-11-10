var _ = require('underscore.string');
var inquirer = require('inquirer');
var Promise = require('pinkie-promise');

module.exports = function (prompts) {
  var _answers;

  return new Promise(function (resolve) {
    return inquirer.prompt(prompts.stack).then(function (answers) {
      _answers = answers;
      if (answers.stack.indexOf('Command') != -1) {
        return inquirer.prompt(prompts.command)
          .then(function (answers1) {
            _answers.command = answers1.command;
            return inquirer.prompt(prompts.common);
          });
      } else {
        return inquirer.prompt(prompts.common);
      }
    }).then(function (answers2) {
      answers2.stack = _answers.stack;
      answers2.command = _answers.command;
      answers2.slugifiedName = _.slugify(answers2.name);
      answers2.humanizedName = _.humanize(answers2.name);
      answers2.underscoredName = _.underscored(answers2.slugifiedName);
      answers2.camelizeName = _.camelize(answers2.slugifiedName, true);
      answers2.classifiedName = _.classify(answers2.underscoredName);
      if (answers2.author) {
        answers2.capitalizedAuthor = _.capitalize(answers2.author);
      }
      resolve(answers2);
    });
  });
}
