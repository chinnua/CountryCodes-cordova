// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        //var element = document.getElementById("deviceready");
        //element.innerHTML = 'Device Ready';
        //element.className += ' ready';
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };


    var codesApp = angular.module('codesApp', ['ngRoute']);

    // configure our routes
    codesApp.config(function ($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl: 'pages/tld.html',
                controller: 'tldController'
            })

            .when('/tld', {
                templateUrl: 'pages/tld.html',
                controller: 'tldController'
            })

            // route for the about page
            .when('/callingcodes', {
                templateUrl: 'pages/callingcodes.html',
                controller: 'callingcodesController'
            })

            // route for the contact page
            .when('/capitals', {
                templateUrl: 'pages/capitals.html',
                controller: 'capitalsController'
            });
    });

    codesApp.controller('tldController', function tldController($scope, $http) {
        $http.get('data/countries.json').then(function (response) {
            $scope.Countries = response.data;
        });
        $scope.title = "Domain Extns.";
    });

    codesApp.controller('callingcodesController', function callingcodesController($scope, $http) {
        $http.get('data/countries.json').then(function (response) {
            $scope.Countries = response.data;
        });
        $scope.title = "Calling Codes";
    });

})();