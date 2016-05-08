/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appMaterial.Input', []);

    thisModule.controller('InputController',
        function($scope) {
            $scope.input1 = 'Some text';
            $scope.input2 = 'Some text';
            $scope.input3 = 'Some text';
            $scope.input4 = 'Text add and we can see error';
            $scope.input5 = '';
            $scope.input6 = 8547;
            // Todo: Put page specific logic here
        }
    );

})();
