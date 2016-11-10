var assert = require('assert');
var prompts = require('../prompts/index.js');
var answers = require('../core/answers.js');


describe('Slush npm pkg', function() {
  describe('get answers', function() {
    it('answers should not empty when it is worked', function(done) {
      this.timeout(50000);
      answers(prompts).then(function(awss){
        console.log(awss);
        assert.ok(awss);
        done();
      });
    });
  });
});