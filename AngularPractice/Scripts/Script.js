/// <reference path="angular.js" />
/// <reference path="angular-route.js" />

//var app = angular
//            .module("Demo", ["ngRoute"])
//            .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
//                $routeProvider
//                    .when("/home", {
//                        templateUrl: "Templates/home.html",
//                        controller: "homeController"
//                    })
//                    .when("/courses", {
//                        templateUrl: "Templates/courses.html",
//                        controller: "coursesController"
//                    })
//                    .when("/students", {
//                        templateUrl: "Templates/students.html",
//                        controller: "studentsController"
//                    })
//                    .when("/addstudents", {
//                        templateUrl: "Templates/addstudents.html",
//                        controller: "putstudentsController"
//                    })
//            }])
//            .controller("homeController", function ($scope) {
//                $scope.message = "Home Page";
//            })
//            .controller("coursesController", function ($scope) {
//                $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server", "AngularJS", "JavaScript"];
//            })
//             .controller("studentsController", function ($scope, $http) {
//                 $http.get("StudentService.asmx/GetAllStudents")
//                                        .then(function (response) {
//                                            $scope.students = response.data;
//                                        })
//             .controller("studentsController", function ($scope, $http) {
//                 $http.get("StudentService.asmx/GetAllStudents")
//                                        .then(function (response) {
//                                            $scope.students = response.data;
//                                        })
//             .controller("putstudentsController", function ($scope, $http) {
//                 var data = {
//                     Name: $scope.Name,
//                     Gender: $scope.Gender,
//                     City: $scope.City
//                 };
//                 $http.put("StudentService.asmx/AddNewStudent", JSON.stringify(data))
//                                        .then(function (response) {
//                                            $scope.message = "Successfully added new student";
//                                        }, function(response) {
//                                            $scope.message = "Failed to add new student";
//                                        })
//             });

var app = angular.module("Demo", ["ngRoute"])
                 .config(function ($routeProvider) {
                     $routeProvider
                            .when("/home", {
                                templateUrl: "Templates/home.html",
                                controller: "homeController"
                            })
                            .when("/courses", {
                                templateUrl: "Templates/courses.html",
                                controller: "coursesController"
                            })
                            .when("/students", {
                                templateUrl: "Templates/students.html",
                                controller: "studentsController"
                            })
                 })
                     .controller("homeController",function ($scope) {
                         $scope.message = "Home Page";
                     })
                     .controller("coursesController", function ($scope) {
                         $scope.courses = ["C#", "Java", "C++", "C", "Javascrpit"];
                     })
                     .controller("studentsController", function ($scope, $http) {
                         $http.get("StudentService.asmx/GetAllStudents")
                               .then(function (response) {
                                   $scope.students = response.data;
                               })
                    
                 });