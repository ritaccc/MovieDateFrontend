'use strict';

describe('myApp.movie module', function() {

  beforeEach(module('myApp.movie'));

  describe('movie controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});