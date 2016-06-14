'use strict';

var app = angular.module('satoshy');
  app.controller('AuthCtrl', ['$scope', '$location', 'Auth', function($scope, $location, Auth){
  	//$scope.user = {};

    $scope.current_user = function() {
        if (Auth._currentUser == null ) { return false } else { return true }
    }

  	$scope.signIn = function() {
        var config = { headers: { 'X-HTTP-Method-Override': 'POST' } }
        Auth.login($scope.user, config).then(function(user) {
            console.log(user); // => {id: 1, ect: '...'}
        }, function(error) {
            $location.path("/home/index");
        });

        $scope.$on('devise:login', function(event, currentUser) {
          //hard regresh
        });

        $scope.$on('devise:new-session', function(event, currentUser) {
            $location.path('/home/index');
        });
  	}

  	$scope.signUp = function() {
        var config = { headers: { 'X-HTTP-Method-Override': 'POST' } }
        Auth.register($scope.user, config).then(function(registeredUser) {
            console.log(registeredUser); // => {id: 1, ect: '...'}
        }, function(error) {
            // Registration failed...
        });

        $scope.$on('devise:new-registration', function(event, user) {
            $location.path('/home/index');
        });
  	}

  	$scope.log_out = function() {
      var config = { headers: { 'X-HTTP-Method-Override': 'DELETE' } }
  		Auth.logout(config).then(function(oldUser) {
            // alert(oldUser.name + "you're signed out now.");
        }, function(error) {
            // An error occurred logging out.
        });

        $scope.$on('devise:logout', function(event, oldCurrentUser) {
          $location.path('/home/index');
        });
  	}
  }]);