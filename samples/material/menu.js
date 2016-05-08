/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appMaterial.Menu', []);

    thisModule.controller('MenuController',
        function($scope, $mdDialog) {
            var originatorEv;
            this.openMenu = function($mdOpenMenu, ev) {
                originatorEv = ev;
                $mdOpenMenu(ev);
            };
            this.announceClick = function(index) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('You clicked!')
                        .content('You clicked the menu item at index ' + index)
                        .ok('Nice')
                        .targetEvent(originatorEv)
                );
                originatorEv = null;
            };
        }
    );

})();
