'use strict';

/**
 * @ngdoc overview
 * @name testYoApp
 * @description
 * # testYoApp
 *
 * Main module of the application.
 */
angular
  .module('testYoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/kontakt', {
        templateUrl: 'views/kontakt.html',
        controller: 'KontaktCtrl',
        controllerAs: 'kontakt'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


  angular.module('testYoApp')
   .controller('NavigationCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isCurrentPath = function (path) {
      return $location.path() === path;
    };
  }]);



