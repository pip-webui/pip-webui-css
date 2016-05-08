/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appMaterial.RadioButton', []);

    thisModule.controller('RadioButtonController',
        function($scope) {
            $scope.fruits = [
                { value: 'Apple' },
                { value: 'Banana' },
                { value: 'Mango' }
            ];

            $scope.radioData = [
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: '3', isDisabled: true },
                { label: '4', value: '4' }
            ];

            $scope.submit = function() {
                alert('submit');
            };
            $scope.addItem = function() {
                var r = Math.ceil(Math.random() * 1000);
                $scope.radioData.push({ label: r, value: r });
            };
            $scope.removeItem = function() {
                $scope.radioData.pop();
            };
        }
    );

})();
