import L from 'leaflet'
import './markers'
import './yandex'
import {getRandInt} from './functions'
import {getRandFloat} from './functions'
import {getColorForLots} from './functions'
require('leaflet.markercluster')

var addressPoints = [];

for (let i = 0; i < 10; i++) {
    addressPoints.push([55.698999 + getRandFloat(), 37.568715 + getRandFloat(), getRandInt(0, 6)]);
}


var latlng = L.latLng(55.698999, 37.568715);

var map = L.map('map', {center: latlng, zoom: 13});


L.yandex('yandex#map').addTo(map);


var markers = L.markerClusterGroup();

for (var i = 0; i < addressPoints.length; i++) {
    var a = addressPoints[i];
    var lots = a[2];
    var marker = L.marker(new L.LatLng(a[0], a[1]), {
        icon: new L.AwesomeNumberMarkers({
            number: lots,
            markerColor: getColorForLots(lots)
        })
    });
    marker.bindPopup(lots);
    markers.addLayer(marker);
}

map.addLayer(markers);
