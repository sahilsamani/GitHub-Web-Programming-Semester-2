// GOOGLE MAPS SECTION


// Declare a variable for map
var map;
// Get lattitude and longitude of Canberra Centre
var unitedStatesAmerica = new google.maps.LatLng(51.5073509, -0.1277583);
// Initialise the map
function initialiseGoogleMap() {
    // Define the properties for Canberra Centre map
    var americaMap = {
        center: unitedStatesAmerica,
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    // Create a map object for Canberra Centre 
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
        document.getElementById("googleMap"), americaMap);

    google.maps.event.trigger(map, "resize");

    // Add markers below this line


    insertGoogleMarker(map);
    insertIBMMarker(map);
    insertMicrosoftMarker(map);
    insertOracleMarker(map);
    insertSASMarker(map);
    insertAmazonMarker(map);


    // Add information data to each google marker
    //    insertGoogleInfoWindow
    //    insertIBMInfoWindow
    //    insertMicrosoftInfoWindow
    //    insertOracleInfoWindow
    //    insertSASInfoWindow
    //    insertAmazonInfoWindow


}
// Add other functions below this line

// Google Marker Function

// I have declared an insertGoogleMarker function, which then consists of multiple data inputs
function insertGoogleMarker(map) {
    // Google Location
    var googleLocation = new google.maps.LatLng(37.419857, -122.078827);
    var googleLocationMarker = new google.maps.Marker({
        position: googleLocation,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
        }
    });

    googleLocationMarker.setMap(map);

    var googleLocationInfo = new google.maps.InfoWindow({
        content: "GOOGLE"
    });

    google.maps.event.addListener(googleLocationMarker, 'click', function () {
        googleLocationInfo.open(map, googleLocationMarker);
    });
}


// IBM Marker Function

// I have declared an insertIBMMarker function, which then consists of multiple data inputs
function insertIBMMarker(map) {
    // IBM Location
    var IBMLocation = new google.maps.LatLng(41.1264849, -73.7140195);
    var IBMLocationMarker = new google.maps.Marker({
        position: IBMLocation,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }
    });

    IBMLocationMarker.setMap(map);

    var IBMLocationInfo = new google.maps.InfoWindow({
        content: "IBM"
    });

    google.maps.event.addListener(IBMLocationMarker, 'click', function () {
        IBMLocationInfo.open(map, IBMLocationMarker);
    });
}


// Microsoft Marker Function

// I have declared an insertMicrosoftMarker function, which then consists of multiple data inputs
function insertMicrosoftMarker(map) {
    // Microsoft Location
    var MicrosoftLocation = new google.maps.LatLng(47.6371, -122.1237);
    var MicrosoftLocationMarker = new google.maps.Marker({
        position: MicrosoftLocation,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        }
    });

    MicrosoftLocationMarker.setMap(map);


    var MicrosoftLocationInfo = new google.maps.InfoWindow({
        content: "MICROSOFT"
    });

    google.maps.event.addListener(MicrosoftLocationMarker, 'click', function () {
        MicrosoftLocationInfo.open(map, MicrosoftLocationMarker);
    });
}


//  Oracle Marker Function

// I have declared an insertOracleMarker function, which then consists of multiple data inputs
function insertOracleMarker(map) {
    // Oracle Location
    var OracleLocation = new google.maps.LatLng(37.4852, -122.2364);
    var OracleLocationMarker = new google.maps.Marker({
        position: OracleLocation,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
        }
    });

    OracleLocationMarker.setMap(map);

    // This block of code is for the small info window
    var contentOracle =
        ' <h1 style="text-align: center;">ORACLE CORPORATION</h1>' +
        ' <img src="./assets/Images/oracleInfoImg.jpg" ' +
        '      style="float:left; width: 34%; margin-right:10px;">' +
        ' <p style = "text-align: center;"><b>ORACLE</b> is an American multinational developer ' +
        'of analytics software based in Cary, North Carolina. SAS develops and markets a suite of analytics software, ' +
        'which helps access, manage, analyze and report on data to aid in decision-making.<br>' +
        '<a href="https://www.sas.com/en_us/home.html"><button type="button" class="common-btn-styling" style="margin-top: 30px; padding: 6px; border-radius: 20%; background-color: #335977; color: white; border-color: #000000; text-decoration: none;">LEARN MORE!</button></a>' +
        ' </p>';


    var infoOracle = new google.maps.InfoWindow({
        content: contentOracle
    });


    var OracleLocationInfo = new google.maps.InfoWindow({
        content: "ORACLE"
    });

    google.maps.event.addListener(OracleLocationMarker, 'click', function () {
        OracleLocationInfo,
        infoOracle.open(map, OracleLocationMarker);
    });

}


// SAS Marker Function

// I have declared an insertSASMarker function, which then consists of multiple data inputs
function insertSASMarker(map) {
    // SAS Location
    var SASLocation = new google.maps.LatLng(35.822830042, -78.757330304);
    var SASLocationMarker = new google.maps.Marker({
        position: SASLocation,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
        }
    });

    SASLocationMarker.setMap(map);

    // This block of code is for the small info window
    var contentSAS =
        ' <h1 style="text-align: center;">SAS INSTITUTE</h1>' +
        ' <img src="./assets/Images/sasInfoImg.jpg" ' +
        '      style="float:left; width: 34%; margin-right:10px;">' +
        ' <p style = "text-align: center;"><b>SAS</b> is an American multinational developer ' +
        'of analytics software based in Cary, North Carolina. SAS develops and markets a suite of analytics software, ' +
        'which helps access, manage, analyze and report on data to aid in decision-making.<br>' +
        '<a href="https://www.sas.com/en_us/home.html"><button type="button" class="common-btn-styling" style="margin-top: 30px; padding: 6px; border-radius: 20%; background-color: #335977; color: white; border-color: #000000; text-decoration: none;">LEARN MORE!</button></a>' +
        ' </p>';


    var infoSAS = new google.maps.InfoWindow({
        content: contentSAS
    });




    var SASLocationInfo = new google.maps.InfoWindow({
        content: "SAS"
    });

    google.maps.event.addListener(SASLocationMarker, 'click', function () {
        SASLocationInfo,
        infoSAS.open(map, SASLocationMarker);
    });

}




// Amazon Marker Function

// I have declared an insertAmazonMarker function, which then consists of multiple data inputs
function insertAmazonMarker(map) {
    // Amazon Location
    var AmazonLocation = new google.maps.LatLng(47.626444, -122.337627);
    var AmazonLocationMarker = new google.maps.Marker({
        position: AmazonLocation,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        }
    });

    AmazonLocationMarker.setMap(map);

    // This block of code is for the small info window
    var contentAmazon =
        ' <h1 style="text-align: center;">AMAZON</h1>' +
        ' <img src="./assets/Images/amazonInfoImg.jpg" ' +
        '      style="float:left; width: 34%; margin-right:10px;">' +
        ' <p style = "text-align: center;"><b>Amazon.com</b> is an American multinational technology ' +
        'company based in Seattle, Washington, that focuses on ' +
        'e - commerce, cloud computing, digital streaming, and artificial intelligence.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Amazon_(company)"><button type="button" class="common-btn-styling" style="margin-top: 30px; padding: 6px; border-radius: 20%; background-color: #335977; color: white; border-color: #000000; text-decoration: none;">LEARN MORE!</button></a>' +
        ' </p>';


    var infoAmazon = new google.maps.InfoWindow({
        content: contentAmazon
    });




    var AmazonLocationInfo = new google.maps.InfoWindow({
        content: "AMAZON"
    });

    google.maps.event.addListener(AmazonLocationMarker, 'click', function () {
        AmazonLocationInfo,
        infoAmazon.open(map, AmazonLocationMarker);
    });
}



/////////////Information Window Function

//Google Information Window
//function insertGoogleInfo(map) {
//    // Canberra Museum and Gallery
//    var googleInfoGallery =
//        new google.maps.LatLng(-35.2818211, 149.1289204);
//    var markerCanberraMuseumGallery = new google.maps.Marker({
//        position: canberraMuseumGallery,
//    });
//
//    markerCanberraMuseumGallery.setMap(map);
//
//    var contentCanberraMuseumGallery =
//        ' <h1>Canberra Museum and Gallery</h1>' +
//        ' <img src="../images/CBRMuseumGallery.jpg" ' +
//        '      style="float:left; width:25%; margin-right:10px;">' +
//        ' <p><b>Canberra Museum and Gallery</b> is an art gallery ' +
//        'and museum in Canberra, the capital of Australia. ' +
//        'It is located on London Circuit, in Civic in ' +
//        'the centre of the city. The gallery was opened ' +
//        'on 13 February, 1998.<br>' +
//        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
//        'Museum_and_Gallery">Wikipedia</a>' +
//        ' </p>';
//
//    var infoCanberraMuseumGallery = new google.maps.InfoWindow({
//        content: contentCanberraMuseumGallery
//    });
//
//    google.maps.event.addListener(markerCanberraMuseumGallery, 'click',
//        function () {
//            infoCanberraMuseumGallery.open(map, markerCanberraMuseumGallery);
//        });
//}






// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initialiseGoogleMap);




// DATA EXCEL SECTION
