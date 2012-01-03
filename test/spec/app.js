// load the dependency required for this test and pass it into the variable app
define(['app/core'],function(app) {

  // use jasmine to run tests against the required code
  describe('App', function() {

    it('should be accessible', function() {
      expect(app).toNotBe(null);
    });

    it('should return a VERSION', function() {
      expect(app.VERSION).toNotBe(null);
    });

  });

});