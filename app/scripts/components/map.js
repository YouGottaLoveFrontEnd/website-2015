'use strict';

$(document).ready(function () {

    function init() {

        var location = {
            lat: 32.0767793,
            long: 34.7852898
        };

        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: new google.maps.LatLng(location.lat, location.long),
            styles: [{
                featureType: 'landscape',
                stylers: [{saturation: -100}, {lightness: 65}, {visibility: 'on'}]
            }, {
                featureType: 'poi',
                stylers: [{saturation: -100}, {lightness: 51}, {visibility: 'simplified'}]
            }, {
                featureType: 'road.highway',
                stylers: [{saturation: -100}, {visibility: 'simplified'}]
            }, {
                featureType: 'road.arterial',
                stylers: [{saturation: -100}, {lightness: 30}, {visibility: 'on'}]
            }, {
                featureType: 'road.local',
                stylers: [{saturation: -100}, {lightness: 40}, {visibility: 'on'}]
            }, {
                featureType: 'transit',
                stylers: [{saturation: -100}, {visibility: 'simplified'}]
            }, {
                featureType: 'administrative.province',
                stylers: [{visibility: 'off'}]
            }, {
                featureType: 'water',
                elementType: 'labels',
                stylers: [{visibility: 'on'}, {lightness: -25}, {saturation: -100}]
            }, {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{hue: '#ffff00'}, {lightness: -25}, {saturation: -97}]
            }]
        };

        var mapElement = document.querySelector('.venue-map');


        new google.maps.Marker({
            position: new google.maps.LatLng(location.lat, location.long),
            map: new google.maps.Map(mapElement, mapOptions),
            icon: {
                url: 'images/location-pin.png',
                scaledSize: new google.maps.Size(28.5, 45.5)
            },
            title: ''
        });
    }

    google.maps.event.addDomListener(window, 'load', init);
});
