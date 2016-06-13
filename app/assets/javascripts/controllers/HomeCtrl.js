'use strict';

angular.module('satoshy')
    .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
      $http.get('http://localhost:3000/posts.json')
      .then(function(res){
        $scope.posts = res.data;
      });
    }]);