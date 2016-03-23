var MvcAngular = angular.module("MvcAngular", ["ngRoute"]);
MvcAngular.controller("LandingPageController", LandingPageController);
MvcAngular.controller("LoginController", LoginController);
MvcAngular.factory("AuthHttpResponseInterceptor", AuthHttpResponseInterceptor);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
       when("/routeOne", {
           templateUrl: "routesDemo/one"
       })
        .when("/routeTwo/:donuts", {
            templateUrl: function (params) { return "/routesDemo/two?donuts=" + params.donuts; }
        })
        .when("/routeThree", {
            templateUrl: "routesDemo/three"
        })
        .when("/login", {
            templateUrl: "/Account/Login",
            controller: LoginController
        });
    $httpProvider.interceptors.push("AuthHttpResponseInterceptor");    
}
configFunction.$inject = ["$routeProvider", "$httpProvider"];
MvcAngular.config(configFunction);