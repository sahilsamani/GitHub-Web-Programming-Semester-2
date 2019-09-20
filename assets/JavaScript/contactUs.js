/////////////////////////// CONTACT US SECTION ///////////////////////

// Declare a variable for map
var map;
// Get lattitude and longitude of Canberra Centre
var australia = new google.maps.LatLng(-37.814, 144.96332);
// Initialise the map
function initialiseGoogleMap() {
    // Define the properties for Melbourne map
    var australiaMap = {
        center: australia,
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    // Create a map object for Canberra Centre 
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
        document.getElementById("googleMap"), australiaMap);

    google.maps.event.trigger(map, "resize");

    // Add markers below this line


    insertCompanyMarker(map);



}
// Add other functions below this line

// Google Marker Function

// I have declared an insertCompanyMarker function, which then consists of multiple data inputs
function insertCompanyMarker(map) {
    // Company Location
    var companyLocation = new google.maps.LatLng(-37.764374, 145.002251);
    var companyLocationMarker = new google.maps.Marker({
        position: companyLocation,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png",
            scaledSize: new google.maps.Size(25, 25)
        }
    });

    companyLocationMarker.setMap(map);

    //    // This block of code is for the small info window
    //    var contentGoogle =
    //        ' <h1 style="text-align: center;">Google CORPORATION</h1>' +
    //        ' <img src="./assets/Images/googleInfoImg.jpg"' +
    //        '   style="float:left; width: 34%; border-radius: 30px 50px 0 50px; float: left; width: 34% !important;">' +
    //        ' <p style = "text-align: center;"><b>IBM</b> is an American multinational technology company ' +
    //        'that specializes in Internet - related services and products which include online advertising technologies, ' +
    //        'search engine <br>' +
    //        '<a href="https://about.google/"><button type="button" class="common-btn-styling">LEARN MORE!</button></a>' +
    //        ' </p>';
    //
    //    var infoGoogle = new google.maps.InfoWindow({
    //        content: contentGoogle
    //    });

    var companyLocationInfo = new google.maps.InfoWindow({
        content: "SOFTWARE EYE"
    });

    google.maps.event.addListener(companyLocationMarker, 'click', function () {
        companyLocationInfo.open(map, companyLocationMarker);
    });
}

// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initialiseGoogleMap);
