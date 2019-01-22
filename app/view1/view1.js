'use strict';

angular.module('myApp.view1', ['ngRoute'])


.controller('View1Ctrl', ['$http','$scope' , function($http,$scope)  //controller for viewctrl page
{ 

    $scope.images = [];


    $http({
        method: 'GET',
        url: 'http://demo8499921.mockable.io/angular'           // requesting api using $http get method for data
     }).then(function (response){
        console.log("Data : "+JSON.stringify(response));        //Getting data as Response on success
        $scope.data = response.titles;
     },function (error){
        console.log("Data : "+JSON.stringify(error));           //log If any error
     });

     $http({
        method: 'GET',
        url: 'https://picsum.photos/list'                       // requesting api using $http get method for images
     }).then(function (response){
        console.log("Data : "+JSON.stringify(response));        //Getting Images as Response on success
        for(var i=0;i<5;i++)
        {
            $scope.images.push(response.data[i]);               //Getting first 5 Images from Response in new array of Images
        }
        console.log("Data : "+JSON.stringify($scope.images));
     },function (error){
        console.log("Data : "+JSON.stringify(error));           //log If any error
     });
  
  
}]);