// // get current position

// function curSuccess(pos) {
//     console.log(pos);
//     console.log(pos.coords.latitude);
//     console.log(pos.coords.longitude);
//     console.log(pos.coords.accuracy);
//     console.log(pos.coords.altitude);
// };

// function curError(err) {
//     console.log(`ERROR(${err.code}): ${err.message}`);
// };

// var curOptions = {};


// // navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);


// // watch position

// const target = {
//     latitude: 41.3874387,
//     longitude: -71.3948392
// }

// function watchSuccess(pos) {
//     const coord = pos.coords;
//     console.log(`lat: ${coord.latitude}, long: ${coord.longitude}`);

//     if (coord.latitude === target.latitude && coord.longitude === target.longitude) {
//         console.log('Congratulations, you reached the target');
//         navigator.geolocation.clearWatch(watchId);
//     };
// };

// function watchError(err) {
//     console.log(`ERROR(${err.code}): ${err.message}`);
// };

// var watchOptions = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
// };


// navigator.geolocation.getCurrentPosition(watchSuccess, watchError, watchOptions);

var map = L.map('map').setView([0, 0], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function (pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    marker.setLatLng([lat, lon]).update();
    map.setView([lat, lon], 13);

    marker.bindPopup(`Found you`).openPopup();
});





