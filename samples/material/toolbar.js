/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appMaterial.Toolbar', []);

    thisModule.controller('ToolbarController',
        function($scope) {
            $scope.todos = [];
            
            for (var i = 0; i < 15; i++) {
                $scope.todos.push({
                    face: '../../dist/images/avatar.jpg',
                    what: "Brunch this weekend?",
                    who: "Min Li Chan",
                    notes: "I'll be in your neighborhood doing errands."
                });
            }
        }
    );

})();
