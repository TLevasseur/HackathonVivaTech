



    angular
        .module('users')
        .controller('UserController', [
            '$rootScope', '$scope', '$mdSidenav', '$timeout', '$http', '$log',
            UserController
        ]);

    var lat;
    var lng;

    function getLatitude() {
        return lat;

    }

    function getLongitude() {
        return lng;

    }

    function callbackLatLng() {

        console.log('Laaaaaat ' + lat);
        console.log('Looooong ' + lng);

    }



    function UserController($rootScope, $scope, $mdSidenav, $timeout, $http, $log ) {
        var self = this;



        //var serverAddress = 'https://mapwize-cmx-server-test.azurewebsites.net';
        //var serverAddress = 'http://localhost:3003';
        var serverAddress = 'http://mapwize-cmx-server-vivatech2017-dev.azurewebsites.net/';

        self.mwzMap       = null;
        self.selected     = null;
        $http({method: 'GET', url: 'http://cors.io/?https://instoremap.com/json'}).then(function(response) {
            self.users = _.keyBy(response.data, 'address');

            init();
        }, _.noop);


        self.socket = null;

        self.markers = {};
        self.historyLine = null;

        self.selectUser   = selectUser;
        self.toggleList   = toggleUsersList;
        self.computeLastReceive = computeLastReceive;
        self.cleanMap = cleanMap;

        self.safeApply = function (fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if(fn && (_.isFunction(fn))) {
                    fn();
                }
            } else {
                $scope.$apply(fn);
            }
        };

        // *********************************
        // Internal methods
        // *********************************

        function computeLastReceive(lastReceive) {
            if (!lastReceive) {
                return 'never';
            }

            var date = new Date(lastReceive);
            return date.getHours() + 'h' + (date.getMinutes() < 10 ? '0' + (date.getMinutes() + '') : date.getMinutes());
        }

        /**
         * Init mapwize map
         */
        function init() {
            $timeout(function () {
                Mapwize.map('mwzMap', {
                    apiKey: 'ContexeoDevAppAPIKEY',
                    //accessKey: 'MkmZlWWxq3xkPTaF'
                }, function (err, mapInstance) {
                    // This callback is called when the map is initialized (Or if there is an error during initialization)

                    if (err) {
                        $log.error('An error occur during map initialization', err);
                    }
                    else {
                        $log.log('map is now loaded');

                        self.mwzMap = mapInstance;

                        self.mwzMap.centerOnVenue('590061774ddeb5001071af4b');

                        startSocket();
                    }
                });
            }, 50, false);

        }

        function receivePosition(position) {

            var pos = position.position;
            $log.log('position', pos.latitude);
            lat = pos.latitude;
            lng = pos.longitude;

            callbackLatLng();

            var user = self.users[position.address];
            if (user) {
                self.safeApply(function () {
                    var p = position.position;
                    user.lastReceivePos = position.position.timestamp;

                    var latLng = L.latLng(p.latitude, p.longitude);

                    if (!self.markers[position.address]) {

                        self.markers[position.address] = new L.marker(latLng, {
                            icon: L.icon({
                                iconUrl: 'assets/avatars/' + user.avatar + '.png',
                                iconSize: [30, 30],
                                iconAnchor: [15, 15],
                                className: 'markerAvatar'
                            }),
                            riseOnHover: true
                        }).addTo(self.mwzMap);

                    }
                    else {
                        self.markers[position.address].setLatLng(latLng);
                    }
                    if (self.selected && self.historyLine && user.address === self.selected.address) {
                        self.historyLine.addLatLng(latLng);
                    }
                });
            }
        }

        function startSocket() {
            self.socket = io(serverAddress);

            self.socket.on('position', receivePosition);

            self.socket.on('connect', function () {
                $log.log('connect');

                var addresses = _.reduce(self.users, function (result, user) {
                    return _.union(result, [user.address]);
                }, []);

                self.socket.emit('addresses', addresses);
            });
        }

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        function selectUser ( user ) {
            cleanSelected();

            self.selected = angular.isNumber(user) ? self.users[user] : user;

            var marker = self.markers[self.selected.address];
            if (marker) {
                marker.setIcon(L.icon({
                    iconUrl: 'assets/avatars/' + self.selected.avatar + '.png',
                    iconSize: [40, 40],
                    iconAnchor: [20, 20],
                    className: 'markerAvatar markerAvatarSelected'
                }));
                marker.setZIndexOffset(240);
            }
            showHistoryFor(self.selected);
        }

        function cleanMap() {
            cleanSelected();
            cleanHistory();
        }

        function cleanSelected() {
            if (self.selected) {
                var oldSelectedMarker = self.markers[self.selected.address];
                if (oldSelectedMarker) {
                    oldSelectedMarker.setIcon(L.icon({
                        iconUrl: 'assets/avatars/' + self.selected.avatar + '.png',
                        iconSize: [30, 30],
                        iconAnchor: [15, 15],
                        className: 'markerAvatar'
                    }));
                    oldSelectedMarker.setZIndexOffset(0);
                }
                self.selected = null;
            }
        }

        function cleanHistory() {
            if (self.historyLine) {
                self.historyLine.remove();
                self.historyLine = null;
            }
        }

        function showHistoryFor(user) {

            cleanHistory();

            $http.get(serverAddress + '/history/' + user.address, {
                params: {
                    limit: 50
                }
            }).then(function (response) {
                //$scope.data = response.data;

                //$log.log(response.data);

                var history = _.orderBy(response.data, 'timestamp');
                var polyLatLng = [];

                _.forEach(history, function (h) {
                    polyLatLng.push([h.latitude, h.longitude]);
                });

                self.historyLine = L.polyline(polyLatLng, {

                }).addTo(self.mwzMap);

            }, function (response) {
                console.error('response', response);
            });
        }



    }


