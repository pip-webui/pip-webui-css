/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appMaterial.Chips', []);

    thisModule.controller('ChipsController',
        function($scope) {
            // Todo: Put page specific logic here

            //$scope.contact = [];
            //
            //
            //$scope.contactChip = [
            //    {
            //        id: "55f28faa4b0c570c4b1f13b4",
            //        image: 'http://dreempics.com/img/picture/Apr/15/425e7331ba53245921c5b246400449b2/4.jpg',
            //        image1: "http://alpha.pipservices.net/api/parties/55f28f064b0c570c4b1f138d/avatar?default_template=letter&bg=rgba(255, 193, 7, 1)&fg=white&chr=S&timestamp=1442264700000",
            //        to_party_id: "55f28f064b0c570c4b1f138d",
            //        to_party_name: "stas"
            //    },
            //    {
            //        id: "55f290244b0c570c4b1f13dc",
            //        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRiz02KRc_10ILcaMFkIoGNk5TlBTcTIEQafKdmtL6gB5D3mFNz',
            //        image1: "http://alpha.pipservices.net/api/parties/55f28ff44b0c570c4b1f13b5/avatar?default_template=letter&bg=rgba(205, 220, 57, 1)&fg=white&chr=S&timestamp=1442264700000",
            //        to_party_id: "55f28ff44b0c570c4b1f13b5",
            //        to_party_name: "stasManager"
            //    },
            //    {
            //        id: "55f2d7e54b0c570c4b1f1573",
            //        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRW0ZaAafFyrn2Ls6R1WplxuytHuehvS9bGK_SQJ3Xzeia3Ar2k',
            //        image1: "http://alpha.pipservices.net/api/parties/55f274b84b0c570c4b1f134b/avatar?default_template=letter&bg=rgba(0, 188, 212, 1)&fg=white&chr=T&timestamp=1442264700000",
            //        to_party_id: "55f274b84b0c570c4b1f134b",
            //        to_party_name: "Test 33333"
            //    },
            //    {
            //        id: "55f49ccce88f6d356e294ace",
            //        image: 'http://foto-cvety.narod.ru/images/flowers023.jpg',
            //        image1: "http://alpha.pipservices.net/api/parties/55f49ccbe88f6d356e294acb/avatar?default_template=letter&bg=rgba(171, 71, 188, 1)&fg=white&chr=M&timestamp=1442264700000",
            //        to_party_id: "55f49ccbe88f6d356e294acb",
            //        to_party_name: "my team"
            //    }
            //];
            //
            //$scope.getConnections = function($query) {
            //    var query = _.filter($scope.contactChip, function (con) {
            //        return con.to_party_name.toLowerCase().indexOf($query.toLowerCase()) > -1;
            //    });
            //
            //    return query;
            //}


            $scope.querySearch = querySearch;
            $scope.allContacts = loadContacts();
            $scope.contacts = [$scope.allContacts[0]];
            $scope.filterSelected = true;

            /**
             * Search for contacts.
             */
            function querySearch (query) {
                var results = query ?
                    $scope.allContacts.filter(createFilterFor(query)) : [];
                return results;
            }

            function createFilterFor(query) {
                var lowercaseQuery = angular.lowercase(query);

                return function filterFn(contact) {
                    return (contact._lowername.indexOf(lowercaseQuery) != -1);
                };

            }

            function loadContacts() {
                var contacts = [
                    'Marina Augustine',
                    'Oddr Sarno',
                    'Nick Giannopoulos',
                    'Narayana Garner',
                    'Anita Gros',
                    'Megan Smith',
                    'Tsvetko Metzger',
                    'Hector Simek',
                    'Some-guy withalongalastaname'
                ];

                return contacts.map(function (c, index) {
                    var cParts = c.split(' ');
                    var contact = {
                        name: c,
                        email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com',
                        image: 'http://dreempics.com/img/picture/Apr/15/425e7331ba53245921c5b246400449b2/4.jpg'
                    };
                    contact._lowername = contact.name.toLowerCase();
                    return contact;
                });
            }

        }
    );

})();
