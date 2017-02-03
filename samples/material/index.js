/* global angular */

(function () {
    'use strict';

    var content = [
        { title: 'Colors', state: 'colors', url: '/colors', controller: 'ColorsController', templateUrl: 'colors.html' },
        { title: 'Flexbox', state: 'flexbox', url: '/flexbox', controller: 'FlexboxController', templateUrl: 'flexbox.html' },
        { title: 'Card', state: 'card', url: '/card', controller: 'CardController', templateUrl: 'card.html' },
        { title: 'Input', state: 'input', url: '/input', controller: 'InputController', templateUrl: 'input.html' },
        { title: 'Button', state: 'button', url: '/button', controller: 'ButtonController', templateUrl: 'button.html' },
        { title: 'Checkbox', state: 'checkbox', url: '/checkbox', controller: 'CheckboxController', templateUrl: 'checkbox.html' },
        { title: 'Radio Button', state: 'radio_button', url: '/radio_button', controller: 'RadioButtonController', templateUrl: 'radio_button.html' },
        { title: 'Chips', state: 'chips', url: '/chips', controller: 'ChipsController', templateUrl: 'chips.html' },
        { title: 'Progress', state: 'progress', url: '/progress', controller: 'ProgressController', templateUrl: 'progress.html' },
        { title: 'Toolbar', state: 'toolbar', url: '/toolbar', controller: 'ToolbarController', templateUrl: 'toolbar.html' },
        { title: 'Divider', state: 'divider', url: '/divider', controller: 'DividerController', templateUrl: 'divider.html' },
        { title: 'Bottom Sheet', state: 'bottom_sheet', url: '/bottom_sheet', controller: 'BottomSheetController', templateUrl: 'bottom_sheet.html' },
        { title: 'Date Picker', state: 'datepicker', url: '/datepicker', controller: 'DatePickerController', templateUrl: 'datepicker.html' },
        { title: 'Select', state: 'select', url: '/select', controller: 'SelectController', templateUrl: 'select.html' },
        { title: 'List', state: 'list', url: '/list', controller: 'ListController', templateUrl: 'list.html' },
        { title: 'Menu', state: 'menu', url: '/menu', controller: 'MenuController', templateUrl: 'menu.html' },
        { title: 'Dialog', state: 'dialog', url: '/dialog', controller: 'DialogController', templateUrl: 'dialog.html' }
    ];

    var thisModule = angular.module('appMaterial', 
        [
            // 3rd Party Modules
            'ui.router', 'ui.utils', 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
            'ngMaterial', 'wu.masonry', 'LocalStorageModule', 'ngAnimate',
            'appMaterial.Colors', 'appMaterial.Card', 'appMaterial.Input', 'appMaterial.Button',
            'appMaterial.Checkbox', 'appMaterial.RadioButton', 'appMaterial.Chips', 'appMaterial.Progress',
            'appMaterial.Toolbar', 'appMaterial.Divider', 'appMaterial.BottomSheet', 'appMaterial.DatePicker',
            'appMaterial.Select', 'appMaterial.List', 'appMaterial.Menu', 'appMaterial.Dialog', 'appMaterial.Flexbox'
        ]
    );

    thisModule.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {

         $mdIconProvider.iconSet('icons', '../../dist/images/icons.svg', 512);

//             $mdThemingProvider.theme('blue')
//                 .primaryPalette('blue')
//                 .accentPalette('green');
// 
//             $mdThemingProvider.theme('pink')
//                 .primaryPalette('pink')
//                 .accentPalette('orange');
// 
//             $mdThemingProvider.theme('green')
//                 .primaryPalette('green')
//                 .accentPalette('purple');
// 
//             $mdThemingProvider.theme('grey')
//                 .primaryPalette('grey')
//                 .accentPalette('yellow');
// 
//             $mdThemingProvider.setDefaultTheme('blue');

            for (var i = 0; i < content.length; i++) {
                var contentItem = content[i];
                $stateProvider.state(contentItem.state, contentItem);
            }
                
            $urlRouterProvider.otherwise('/colors');
        } 
    );

    thisModule.controller('AppController', 
        function ($scope, $rootScope, $state, $mdSidenav) {
            $scope.languages = ['en', 'ru'];
            $scope.themes = ['blue', 'green', 'pink', 'grey'];

            $scope.selected = {
                theme: 'blue',
                tab: 0  
            };

            $scope.content = content;
            $scope.menuOpened = false;

            $scope.onThemeClick = function(theme) {
                $rootScope.$theme = theme;
            };

            // Update page after language changed
            $rootScope.$on('languageChanged', function(event) {
                console.log('Reloading...');
                console.log($state.current);
                console.log($state.params);

                $state.reload();
            });

            // Update page after theme changed
            $rootScope.$on('themeChanged', function(event) {
                $state.reload();
            });
                        
            $scope.onSwitchPage = function(state) {
                $mdSidenav('left').close();
                $state.go(state);
            };
            
            $scope.onToggleMenu = function() {
                $mdSidenav('left').toggle();
            };
                        
            $scope.isActiveState = function(state) {
                return $state.current.name == state;  
            };
        }
    );

})();
