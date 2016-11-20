'use strict';

/**
 * @ngdoc function
 * @name testYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testYoApp
 */
angular.module('testYoApp')
	.controller('MainCtrl', function ($scope, $location) {
	this.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];
	$scope.proba = this.awesomeThings;
	$scope.klasa = 'active';
	console.log($scope.klasa);
	console.log('main' + $location.path());
	});

angular.module('testYoApp')
   .controller('NavigationCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isCurrentPath = function (path) {
      return $location.path() === path;
    };
  }]);