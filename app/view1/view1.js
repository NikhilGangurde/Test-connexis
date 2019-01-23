'use strict';

angular.module('myApp.view1', ['ngRoute','ngMaterial'])

.controller('View1Controller', ['$http','$scope' , function($http,$scope)  //controller for viewctrl page
{ 
    $scope.images = [];
    $scope.imagesfinal = [];

    $http({
        method: 'GET',
        url: 'http://demo8499921.mockable.io/angular'           // requesting api using $http get method for data
     }).then(function (response){
        $scope.data = response.data.titles;
     },function (error){
        console.log("Data : "+JSON.stringify(error));           // log for Error if any
     });

     $http({
        method: 'GET',
        url: 'https://picsum.photos/list'                       // requesting api using $http get method for images
     }).then(function (response){
        for(var i=6;i<15;i++)
        {
            var s=response.data[i].post_url
            var final = s.substr(s.lastIndexOf('/') + 1);       //  Sub string function for gettin id from image url
            var photo = new UnsplashPhoto();                    // Unsplash object creation
            photo.find(final).fetch();                           //  unsplash find function call using photo id 
            $scope.images.push(photo);                           // new array of url's of images
        }
     },function (error){
        console.log("Data : "+JSON.stringify(error));           //log If any error
     });

     
    
  
  
}]);