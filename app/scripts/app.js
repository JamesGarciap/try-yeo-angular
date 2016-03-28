'use strict';

/**
 * @ngdoc overview
 * @name yeoangularApp
 * @description
 * # yeoangularApp
 *
 * Main module of the application.
 */
angular
  .module('yeoangularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }])
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
      .when('/todos', {
        templateUrl: 'views/todos.html',
        controller: 'TodosCtrl',
        controllerAs: 'todos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
