'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /sign-up-login when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/sign-up-login");
  });


  describe('sign-up-login', function() {

    beforeEach(function() {
      browser.get('index.html#!/sign-up-login');
    });


    it('should render sign-up-login when user navigates to /sign-up-login', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('movie', function() {

    beforeEach(function() {
      browser.get('index.html#!/movie');
    });


    it('should render movie when user navigates to /movie', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
