(function (angular) {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'ngAnimate',
      'ngMessages',
      'ngTouch',
      'ui.router',
      'ui.bootstrap',
      'angular-loading-bar',
      'egen.app'
    ])
    .config(moduleConfig)
    .run(moduleRun);

  function moduleConfig($locationProvider,$routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/users', {
        templateUrl: 'app/views/users.tmpl.html',
        controller: 'UsersController',
        controllerAs: 'userController'
      })
      .when('/movies', {
        templateUrl: 'app/views/movies.tmpl.html',
        controller: 'MovieController',
        controllerAs: 'movieController'
      })
      .when('/movies/:movieid', {
        templateUrl: 'app/views/movies.tmpl.html',
        controller: 'MovieController',
        controllerAs: 'movieController'
      })
      .when('/login', {
        templateUrl: 'app/views/login.tmpl.html',
        controller: 'UserController',
        controllerAs: 'userController'
      })
      .when('/signup', {
        templateUrl: 'app/views/signup.tmpl.html',
        controller: 'UserController',
        controllerAs: 'userController'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }

  function moduleRun(CONFIG) {
    console.log(CONFIG);
  }

})(angular);
