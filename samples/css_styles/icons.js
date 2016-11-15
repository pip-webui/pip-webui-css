/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appCssStyles.Icons', []);

    thisModule.controller('IconsController',
        function($scope) {
            $scope.icons = [
                'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up',
                'chevron-big-left', 'chevron-big-right',
                'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up',
                'triangle-down', 'triangle-left', 'triangle-right', 'triangle-up',

                'plus', 'minus', 'cross', 'check', 'check-all', 'reject', 'vdots',
                'dots', 'handle', 'vhandle',

                'checkbox-on', 'checkbox-off', 'radio-off', 'radio-on',

                'circle', 'minus-circle', 'plus-circle', 'cross-circle', 'warn-circle',
                'star-circle', 'info-circle', 'down-circle',

                'person', 'people', 'people-white', 'people-group', 'people-plus',
                'person-square', 'people-team', 'people-circle', 'person-minus', 'person-plus',
                'person-circle', 'person-star', 'person-message',

                'text', 'weblink', 'images', 'attach', 'location', 'audio', 'time',
                'image', 'document',

                'bell', 'bell-white', 'bell-ring', 'bell-snoozed',

                'search',  'search-doc', 'search-square', 'search-person',

                'category', 'area', 'goal', 'objective', 'dream', 'action', 'task',

                'message', 'message-check', 'forward','forward-all', 'reply', 'reply-all',
                'share', 'comment', 'cheer', 'uncheer', 'handshake',

                'menu', 'list', 'grid', 'submenu',

                'trash', 'date', 'enter', 'exit', 'note-take', 'refresh',
                'config', 'config-square',
                'world', 'star', 'star-white', 'star-1', 'chat',
                'camera', 'target',
                'phone', 'help', 'pen', 'archive',
                'hot', 'reload', 'send',
                'select-all', 'unselect-all', 'download', 'video',
                'more', 'face-happy', 'question',
                'convert', 'picture-no-border',
                'disk', 'stop',
                'warn-triangle', 'warn-star',
                'key-reset',
                'news', 'key', 'progress', 'lock', 'unlock', 'mic',
                'bars-square', 'folder', 'film',
                'guide', 'ruler', 'lamp', 'monitor', 'connections', 'printer', 'card', 'bug', 'bars',
                'contacts', 'paid', 'admin',
                'feedback', 'plus-square',
                'pie-circle', 'preview', 'info-circle-outline', 'info-phone',
                'label', 'collapse', 'expand', 'delete', 'plus-circle-outline', 'minus-circle-outline',

                'box-clock', 'dots-circle', 'four-circles', 'boxes', 'database', 'large-list',
                'gears', 'paper-plane', 'pie-chart', 'full-moon', 'first-aid', 'text-wrapping-3',
                'text-wrapping-2', 'text-wrapping-1', 'hierarchy-1', 'hierarchy-2', 'hierarchy-3',
                'hierarchy-4', 'hierarchy-5', 'hierarchy-6', 'hierarchy-7',
                'layers', 'registry-2', 'document-box-1', 'cube', 'database-minus', 'marker-1',
                'map-pin', 'map-marker-1', 'receipt-3',
                'receipt-4', 'arrange-1', 'bin-2', 'bin-1',
                'delete-2', 'anchor-point-2', 'anchor-point-1'
                


            ];
        }
    );

})();
