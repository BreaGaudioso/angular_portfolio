var app = angular.module("PortfolioApp");


app.controller("ProjectsController", function($scope) {
  $scope.titles = "My Projects"
});

app.controller("ResumeController", function($scope) {
 $scope.titles = "Resume"
});

app.controller("BioController", function($scope) {
 $scope.titles = "About me",
 $scope.photo = "http://static1.squarespace.com/static/54750b16e4b0957eae5225e3/t/5624726ce4b0a77217f69308/1445229165408/photo?format=500w"
});