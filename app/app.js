'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.view1',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider','$qProvider', function($locationProvider, $routeProvider, $qProvider) {
  $locationProvider.hashPrefix('!');

    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Controller'
    });

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

