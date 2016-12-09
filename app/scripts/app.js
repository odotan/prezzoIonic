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
        })
        // url will be /selectbiz
        .state('selectbiz', {
            url: '/selectbiz',
            templateUrl: '../views/selectbiz.html',
            controller: 'SelectbizCtrl'
        })
        // url will be /business_details
        .state('business_details', {
            url: '/business_details',
            templateUrl: '../views/business_details.html',
            controller: 'BusinessDetailsCtrl'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');
})
.service('advertisersData', function ($http, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    $rootScope.advertisers = [];
    this.getData = function() {
        return $http.get('data/advertisers.json', {cache: true})
                .then(function(res) {
                    var advertisers = [];
                    for (var adv in res.data) {
                        advertisers.push(res.data[adv]);
                    }
                    $rootScope.advertisers = res.data;
                });
    };
  })
// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    // $scope.processForm = function() {
    //     alert('awesome!');  
    // };
    
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
}])
.controller('SelectbizCtrl', function (advertisersData) {
    advertisersData.getData();
})
.controller('BusinessDetailsCtrl', function ($scope, $state, advertisersData) {
    advertisersData.getData();
    $scope.selectBiz = function() {
        $state.go('selectbiz');
    };
    $scope.ad = function() {
        $state.go('ad');
    };
});
