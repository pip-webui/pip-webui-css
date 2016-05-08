/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appMaterial.Progress', []);

    thisModule.controller('ProgressController',
        function($scope, $interval) {
            $scope.inProgress = false;
            $scope.progress = 0;
            
            var promise = undefined;
            
            $scope.start = function () {
                if (angular.isDefined(promise)) return;
                promise = $interval(function () {
                    if ($scope.progress < 101) $scope.progress += 1;
                    else $scope.progress = 0;
                }, 100, 0, true);
                $scope.inProgress = true;
            };
            
            $scope.stop = function () {
                $interval.cancel(promise);
                promise = undefined;
                $scope.inProgress = false;
            };
            
            $scope.start();
        }
    );

})();
