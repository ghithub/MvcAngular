var MvcAngular = angular.module("MvcAngular", ["ngRoute"]);
MvcAngular.controller("LandingPageController", LandingPageController);
var configFunction = function ($routeProvider) {
    $routeProvider.
       when("/routeOne", {
           templateUrl: "routesDemo/one"
       })
        .when("/routeTwo", {
            templateUrl: "routesDemo/two"
        })
        .when("/routeThree", {
            templateUrl: "routesDemo/three"
        });
}
configFunction.$inject = ["$routeProvider"];
MvcAngular.config(configFunction);