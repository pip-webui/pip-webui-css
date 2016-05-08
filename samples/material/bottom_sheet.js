/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appMaterial.BottomSheet', []);

    thisModule.controller('BottomSheetController',
        function($scope, $mdBottomSheet) {
            $scope.alert = '';
            
            $scope.showListBottomSheet = function ($event) {
                $scope.alert = '';
                $mdBottomSheet.show({
                    template: '<md-bottom-sheet class="md-list md-has-header"><md-subheader>Comment Actions</md-subheader><md-list>' +
                            '<md-item ng-repeat="item in items"><md-button aria-label="{{item.name}}" ng-click="listItemClick($index)">' +
                            '<md-inline-list-icon icon="{{item.icon}}"></md-inline-list-icon><span class="md-inline-list-icon-label">{{ item.name }}</span>' +
                            '</md-button></md-item></md-list></md-list>',
                    controller: 'appListBottomSheetController',
                    targetEvent: $event
                }).then(function (clickedItem) {
                    $scope.alert = clickedItem.name + ' clicked!';
                });
            };
            
            $scope.showGridBottomSheet = function ($event) {
                $scope.alert = '';
                $mdBottomSheet.show({
                    template: '<md-bottom-sheet class="md-grid"><md-list><md-item ng-repeat="item in items">' +
                            '<md-button class="md-grid-item-content" aria-label="{{item.name}}" ng-click="listItemClick($index)">' +
                            '{{ item.name }}</md-button></md-item></md-list></md-bottom-sheet>',
                    controller: 'appGridBottomSheetController',
                    targetEvent: $event
                }).then(function (clickedItem) {
                    $scope.alert = clickedItem.name + ' clicked!';
                });
            };
        }
    );

    thisModule.controller('appListBottomSheetController', 
        function ($scope, $mdBottomSheet) {
            $scope.items = [
                { name: 'Share', icon: 'share' },
                { name: 'Upload', icon: 'upload' },
                { name: 'Copy', icon: 'copy' },
                { name: 'Print this page', icon: 'print' },
            ];
            
            $scope.listItemClick = function ($index) {
                var clickedItem = $scope.items[$index];
                $mdBottomSheet.hide(clickedItem);
            };
        }
    );
    
    thisModule.controller('appGridBottomSheetController', 
        function ($scope, $mdBottomSheet) {
            $scope.items = [
                { name: 'Hangout', icon: 'hangout' },
                { name: 'Mail', icon: 'mail' },
                { name: 'Message', icon: 'message' },
                { name: 'Copy', icon: 'copy' },
                { name: 'Facebook', icon: 'facebook' },
                { name: 'Twitter', icon: 'twitter' },
            ];
            
            $scope.listItemClick = function ($index) {
                var clickedItem = $scope.items[$index];
                $mdBottomSheet.hide(clickedItem);
            };
        }
    );

})();
