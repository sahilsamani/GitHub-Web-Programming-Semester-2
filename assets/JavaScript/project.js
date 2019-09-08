// Declare a variable for map
var googleMap;
// Get lattitude and longitude of Canberra Centre
var unitedStatesAmerica = new google.maps.LatLng(39.381266, -97.922211);
// Initialise the map
function initialiseGoogleMap() {
    // Define the properties for Canberra Centre map
    var americaMap = {
        center: unitedStatesAmerica,
        zoom: 25,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create a map object for Canberra Centre 
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
        document.getElementById("googleMap"), americaMap);

    // Add markers below this line

}
// Add other functions below this line

// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initialiseGoogleMap);
