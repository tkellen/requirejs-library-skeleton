// load the entire module/library and pass to the test
define(['app'],function(app) {

  // use jasmine to run tests against the required code
  describe('app', function() {

    it('should be accessible', function() {
      expect(app).toNotBe(null);
    });

    it('should return a VERSION', function() {
      expect(app.VERSION).toNotBe(null);
    });

  });

});