/* global angular */

(function () {
    'use strict';

    var content = [
        { title: 'Fonts', state: 'fonts', url: '/fonts', controller: 'FontsController', templateUrl: 'fonts.html' },
        { title: 'Animation', state: 'animation', url: '/animation', controller: 'AnimationController', templateUrl: 'animation.html'},
        { title: 'Alignment', state: 'alignment', url: '/alignment', controller: 'AlignmentController', templateUrl: 'alignment.html' },
        { title: 'Colors', state: 'colors', url: '/colors', controller: 'ColorsController', templateUrl: 'colors.html' },
        { title: 'Sizes', state: 'sizes', url: '/sizes', controller: 'SizesController', templateUrl: 'sizes.html' },
        { title: 'Icons', state: 'icons', url: '/icons', controller: 'IconsController', templateUrl: 'icons.html' },
        { title: 'Responsive', state: 'responsive', url: '/responsive', controller: 'ResponsiveController', templateUrl: 'responsive.html' }
    ];

    var thisModule = angular.module('appCssStyles', 
        [
            // 3rd Party Modules
            'ui.router', 'ui.utils', 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
            'ngMaterial', 'LocalStorageModule', 'ngAnimate', 
            'appCssStyles.Fonts', 'appCssStyles.Alignment', 'appCssStyles.Colors', 'appCssStyles.Sizes',
            'appCssStyles.Icons', 'appCssStyles.Responsive', 'appCssStyles.Animation'
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
                
            $urlRouterProvider.otherwise('/fonts');
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
