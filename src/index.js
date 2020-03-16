console.log('consoled from our index.js file')
console.log('adding marker')


const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoia25pZ2h0ZGV2aW4iLCJhIjoiY2s3dXFhdHJlMDVxdjNscGN3YmI4OW0ycyJ9.j9FwcV1YybaOBfD0GCW3GA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);



// -- > below is the code from the hint. Prints a 403 error.
// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago
