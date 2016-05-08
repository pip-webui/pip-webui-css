/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appMaterial.Flexbox', []);

    thisModule.controller('FlexboxController',
        function($scope, $rootScope) {
            $rootScope.$on('pipWindowResized', function (event, size) {
                console.log('Window width: ' + size.window.width
                    + ' height: ' + size.window.height
                    + ' size: ' + $scope.$size);
            });
        }
    );

})();
