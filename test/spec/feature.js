// load the entire module/library and pass to the test
define(['app'],function(app) {

  // use jasmine to run tests against the required code
  describe('feature', function() {

    it('should be working', function() {
      expect(app.feature()).toBe('working');
    });

  });

});