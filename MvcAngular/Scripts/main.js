// main.js
// create the module and name it app
var app = angular.module("mainApp", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
	.when("/", {
	    templateUrl: "/Pagelets/home.html",
	    controller: "mainController"
	})
	.when("/about", {
	    templateUrl: "/Pagelets/about.html",
	    controller: "aboutController"
	})
	.when("/contact", {
	    templateUrl: "/Pagelets/contact.html",
	    controller: "contactController"
	})
	.when("/contact2", {
	    templateUrl: "/Pagelets/contact2.html",
	    controller: "contact2Controller"
	})

    //$locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
app.controller("mainController", function ($scope) {
    // create a message to display in our view
    $scope.message = "test only!";
});

app.controller("aboutController", function ($scope) {
    // create a message to display in our view
    $scope.message = "about only!";
});

app.controller("contactController", function ($scope) {
    // create a message to display in our view
    $scope.message = "contact only!";
});

app.controller("contact2Controller", function ($scope) {
    // create a message to display in our view
    $scope.message = "contact2 only!";
});

app.service("WebApiService", function ($http, $q) {
    return {
        async: function () {
            return $http.get("api/values"); //returns a promise.
        }
    };
});

app.controller("WebApiController", function ($scope, WebApiService) {
    WebApiService.async().then(function (d) {
        console.log("data from web api call: ", d.data);
        $scope.result = d;
    }, function (d) {
        console.log("An error has occurred.", d.data);
        $scope.error = d.data;
    });
});