'use strict';

/**
 * @ngdoc function
 * @name testYoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testYoApp
 */
angular.module('testYoApp')
  .controller('AboutCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('about');
	$scope.getClass = function (path) {
  		return ($location.path().substr(0, path.length) === path) ? 'active' : '';
	};
  });
