var app = angular.module('PortfolioApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/ProjectsController.html',
    controller: 'ProjectsController'
  })
  .when('/bio', {
    templateUrl: 'partials/BioController.html',
    controller: 'BioController'
  })
  .when('/resume', {
    templateUrl: 'partials/ResumeController.html',
    controller: 'ResumeController'
  })
  $locationProvider.html5Mode(true);
});