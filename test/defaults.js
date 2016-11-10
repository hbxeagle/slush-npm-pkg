var assert = require('assert');
var defaults = require('../core/defaults.js');

describe('Slush npm pkg', function() {
  describe('default info', function() {
    it('appName should return \'slush-npm-pkg\' when \'defaults\' is worked', function() {
      assert.equal(defaults.name, 'slush-npm-pkg');
    });

    it('userName should not empty when \'defaults\' is worked', function() {
      assert.ok(defaults.userName);
    });

    it('authorName should not empty when \'defaults\' is worked', function() {
      assert.ok(defaults.author);
    });

    it('authorEmail should not empty when \'defaults\' is worked', function() {
      assert.ok(defaults.email);
    });

    it('homepage should return \'https://github.com/hbxeagle/slush-npm-pkg#readme\' when \'defaults\' is worked', function() {
      assert.equal(defaults.homepage, 'https://github.com/hbxeagle/slush-npm-pkg#readme');
    });

    it('repositoryType should return \'git\' when \'defaults\' is worked', function() {
      assert.equal(defaults.repositoryType, 'git');
    });

    it('repositoryUrl should return \'git+https://github.com/hbxeagle/slush-npm-pkg.git\' when \'defaults\' is worked', function() {
      assert.equal(defaults.repositoryUrl, 'git+https://github.com/hbxeagle/slush-npm-pkg.git');
    });

    it('bugsUrl should return \'https://github.com/hbxeagle/slush-npm-pkg/issues\' when \'defaults\' is worked', function() {
      assert.equal(defaults.bugsUrl, 'https://github.com/hbxeagle/slush-npm-pkg/issues');
    });
  });
});