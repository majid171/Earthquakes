
mapboxgl.accessToken = 'pk.eyJ1IjoibWFqaWQxNzEiLCJhIjoiY2p0ZG9uOTllMTloMDQ5cDRwa3EwcjU4MyJ9.LM3akprYjlU7ACww97Nd1Q';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [0, 50], // starting position
    zoom: 1.5
}); 
// set the bounds of the map


// initialize the map canvas to interact with later
var canvas = map.getCanvasContainer();

// an arbitrary start will always be the same
// only the end or destination will change
var start = [-1000, 45.523751];

// this is where the code for the next step will go    

map.on('load', function () {

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.03238901390978, 38.913188059745586]
                    },
                    "properties": {
                        "title": "Mapbox DC",
                        "icon": "monument"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.414, 37.776]
                    },
                    "properties": {
                        "title": "Mapbox SF",
                        "icon": "harbor"
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
});

map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['points']
    });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    // var popup = new mapboxgl.Popup({ offset: [0, -15] })
    //     .setLngLat(feature.geometry.coordinates)
    //     .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
    //     .setLngLat(feature.geometry.coordinates)
    //     .addTo(map);

    var propContainer = document.getElementById('properties');
    propContainer.style.visibility = "visible";

    var date = document.getElementById('dateField');
    var lat = document.getElementById('latField');
    var lon = document.getElementById('lonField');

    date.innerHTML = 'Date: hi';
    lat.innerHTML = 'Latitude: ' + feature.geometry.coordinates[0];
    lon.innerHTML = 'Longitude: ' + feature.geometry.coordinates[1];

});
