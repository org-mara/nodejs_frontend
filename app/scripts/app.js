'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])

  // COLOR
  // .config(function($mdThemingProvider) {
  //   $mdThemingProvider.theme('default')
  //   .primaryPalette('indigo')
  //   .accentPalette('pink');
  // })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/newtod', {
        templateUrl: 'views/newtod.html',
        controller: 'NewtodCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
