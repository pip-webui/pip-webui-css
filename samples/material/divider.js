/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appMaterial.Divider', []);

    thisModule.controller('DividerController',
        function($scope) {
            $scope.messages = [
                {
                    face: '../../dist/images/avatar.jpg',
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    face: '../../dist/images/avatar.jpg',
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    face: '../../dist/images/avatar.jpg',
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    face: '../../dist/images/avatar.jpg',
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    face: '../../dist/images/avatar.jpg',
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                }
            ];
        }
    );

})();
