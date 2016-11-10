var conflict = require('gulp-conflict');
var gulp = require('gulp');
var install = require('gulp-install');
var rename = require('gulp-rename');
var template = require('gulp-template');
var answers = require('./answers.js');

module.exports = function (prompts, task) {

  gulp.task(task, function (done) {
    answers(prompts).then(function(aws){
      var _path;
      if(aws.stack) {
        for(var i = 0; i < prompts.publishs.length; i++) {
          var pub = prompts.publishs[i];
          if (aws.stack == pub.stack) {
            _path = __dirname + '/../templates/' + pub.template;
          }
        }
      } else {
        _path = __dirname + '/../templates/' + prompts.publishs.template;
      }

      gulp.src(_path)
        .pipe(template(aws))
        .pipe(rename(function (file) {
          if (file.basename[0] === '_') {
            file.basename = '.' + file.basename.slice(1);
          }
        }))
        .pipe(conflict(pub.dist))
        .pipe(gulp.dest(pub.dist))
        .pipe(install())
        .on('end', function () {
          done();
        });
    });

  });

  return gulp;

}