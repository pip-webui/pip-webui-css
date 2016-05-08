/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appCssStyles.Themes', []);

    thisModule.controller('ThemesController',
        function ($scope) {
            $scope.themes = [
                "blue",
                "pink",
                "amber",
                "orange",
                "green",
                "grey",
                "navy",
                "dark",
                "black"
            ];
            $scope.useTheme = 'blue';
        }
    );

})();
