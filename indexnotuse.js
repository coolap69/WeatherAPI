/*global $ APIKEY* navigator*/

$(document).ready(function() {

            
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        showLocation(position);
                        console.log(position.coords.longitude);
                        console.log(position.coords.latitude);

                    })
                }

                function showLocation(position) {
                    // x.innerHTML = "Latitude: " + position.coords.latitude + 
                    // "<br>Longitude: " + position.coords.longitude;

                    var lat = position.coords.latitude;
                    var lon = position.coords.longitude;
                }
            });
            
        // $(document).ready(function() {
        // $.ajax({
        //         // method: "GET ",
        //         url: "https://newsapi.org/v2/sources",
        //         data: { category: "technology", country: "us", language: "en", apiKey: APIKEY },
        //         success: function(data {

        //         }