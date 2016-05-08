/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appCssStyles.Sizes', []);

    thisModule.controller('SizesController',
        function($scope) {
            $scope.wValues = ["w0  ",
                              "w2  ",
                              "w4  ",
                              "w8  ",
                              "w16 ",
                              "w24 ",
                              "w40 ",
                              "w48 ",
                              "w56 ",
                              "w64 ",
                              "w72 ",
                              "w88 ",
                              "w100",
                              "w150-flex", "w178-flex", "w264-flex", "w440-flex", "w600-flex"];
            $scope.wValuesNotShow = ["w900-flex", "w50-stretch", "w-stretch"];


            $scope.hValues = [ "h0", "h2", "h4", "h8",
                               "h16", "h24", "h40", "h48",
                               "h56", "h64",  "h72",
                               "h88", "h110",  "h240", "h440",
                               "h12e", "h15e", "h3e", "h-stretch"];

            $scope.mValues = [ "m-10", "m0", "m1", "m2", "m4",
                               "m8", "m12", "m16", "m24", "m16-flex", "m24-flex"];
        }
    );

})();
