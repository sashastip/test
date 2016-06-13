'use strict'

var app = angular.module('satoshy', ['ui.router', 'templates', 'templates', 'Devise']);

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', { url: '/', templateUrl: 'home/index.html', controller: 'HomeCtrl' })
      .state('auth_login', { url: '/login', templateUrl: 'auth/login.html', controller: 'AuthCtrl' })
      .state('auth_signup', { url: '/signup', templateUrl: 'auth/signup.html', controller: 'AuthCtrl' });

     $urlRouterProvider.otherwise('/');
  }]);