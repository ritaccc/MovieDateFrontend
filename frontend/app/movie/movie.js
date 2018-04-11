'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movie', {
    templateUrl: 'movie/movie.html',
  });
}])



