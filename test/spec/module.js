// load the entire module/library and pass to the test
define(['app'],function(app) {

  // use jasmine to run tests against the required code
  describe('module', function() {

    it('should have a method', function() {
      expect(app.module.method).toNotBe(undefined);
    });

    it('the method should work', function() {
      expect(app.module.method()).toBe('it does');
    });

  });

});