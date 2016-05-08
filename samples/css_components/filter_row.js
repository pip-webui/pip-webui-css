/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appComponentsStyles.FilterRow', []);

    thisModule.controller('FilterRowController',
        function ($scope) {
            $scope.topic1 = ['topic1', 'topic2', 'topic3'];
            $scope.topic2 = ['category1', 'category2', 'category3'];
            $scope.topicModel1 = $scope.topic1[1];
            $scope.topicModel2 = $scope.topic2[0];
        }
    );

})();
