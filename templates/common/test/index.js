describe('<%= name %>', function() {
  this.timeout(5000);
  this.slow(3000);

  // Test example:
  describe('on instantiation', function() {
    it('should instantiate with specified property', function() {
      expect(<%= name %>).to.have.property('some');
    });

    it('run a specified property should returned a specified value', function() {
      expect(<%= name %>.some()).to.equal('Example');
    });
  });
});