/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appMaterial.Select', []);

    thisModule.controller('SelectController',
        function ($scope) {
            $scope.clearValue = function() {
                $scope.myModel = undefined;
            };
            $scope.overall = {};
            $scope.overall.selectResult = null;
            $scope.overall.dataCollection = [
                {
                    name: 'time',
                    icon: 'icon-time'
                },
                {
                    name: 'person-plus',
                    icon: 'icon-person-plus'
                },
                {
                    name: 'folder',
                    icon: 'icon-folder'
                },
                {
                    name: 'monitor',
                    icon: 'icon-monitor'
                },
                {
                    name: 'printer',
                    icon: 'icon-printer'
                }
            ];


        }
    );

})();
