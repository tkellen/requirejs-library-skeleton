// load the dependency required for this test and pass it into the variable app
define(['app/feature'],function(app) {

  // use jasmine to run tests against the required code
  describe('Feature', function() {

    it('should be working', function() {
      expect(app.feature()).toBe('working');
    });

  });

});