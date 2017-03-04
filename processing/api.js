function initMap() {
  // initialize the map
  var myMap = L.map('map').setView([41.384981, 2.174172], 13);
  // load a tile layer
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: 'Map data <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 17,
      minZoom: 5
    }).addTo(myMap);
  return myMap;
}

function setupGreenIcon() {
  var myGreenIcon = new L.Icon({
    iconUrl: 'leaflet/images/marker-icon-2x-green.png',
    shadowUrl: 'leaflet/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  return myGreenIcon;
}

function setupRedIcon() {
  var myRedIcon = new L.Icon({
    iconUrl: 'leaflet/images/marker-icon-2x-red.png',
    shadowUrl: 'leaflet/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  return myRedIcon;
}

function colorPick(tp) {
  if (tp == 0 ) {
    return "#ff1a1a";
  }
  else if (tp == 1) {
    return "#221aff";
  }
  else {
    return "#ff0000";
  }
}
