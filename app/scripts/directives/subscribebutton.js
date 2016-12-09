'use strict';

/**
 * @ngdoc directive
 * @name testAppApp.directive:subscribeButton
 * @description
 * # subscribeButton
 */
angular.module('testAppApp')
  .directive('subscribeButton', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the subscribeButton directive');
      }
    };
  });
