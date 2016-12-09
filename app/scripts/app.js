'use strict';

angular
  .module('testAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: '../views/registrationForm.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: '../views/form-profile.html'
        })
        
        // url will be /form/interests
        .state('form.interests', {
            url: '/interests',
            templateUrl: '../views/form-interests.html'
        })
        
        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: '../views/form-submit.html'
        })

        // url for viewing ad product.
        .state('ad', {
            url: '/ad',
            templateUrl: '../views/ad.html',
            controller: 'adController'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
    
})

.controller('adController', ['$scope', function ($scope) {
        $scope.clickReminder = function(){
            
        }

        $scope.products = [
            {
                'id' : 1,
                'img_src': 'graphics%5Cbanners%5Cprezzo-AMPM-crembo.png',
                'price'  : 4,
            },
            {
                'id' : 2,
                'img_src': 'graphics%5Cbanners%5Cprezzo-AMPM-crembo.png',
                'price'  : 18
            }
        ]

    }]);
