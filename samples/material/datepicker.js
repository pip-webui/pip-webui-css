/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appMaterial.DatePicker', []);

    thisModule.controller('DatePickerController',
        function ($scope) {
            $scope.data = {};
            $scope.data.startDate = new Date();
            $scope.data.disabled = new Date();
            $scope.data.disabled = true;
            $scope.data.showDate = null;

            $scope.startLabel = 'Start Date';
            $scope.disabledLabel = 'Disabled Date';

            $scope.onChangeStartDate = function(){
                $scope.data.showDate = $scope.data.startDate;
            };
        }
    );

})();
