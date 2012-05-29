// load the entire module/library and pass to the test
define(['skeleton'],function(skeleton) {

  // use jasmine to run tests against the required code
  describe('coffeescript', function() {

    it('should be automatically transpiled', function() {
      expect(skeleton.coffeescript()).toBe('working');
    });

  });

});
