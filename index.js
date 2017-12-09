/*global $ APIKEY*/

$(function(){
    var C = false;
    var apiData;
    
    backgroundImage = [
        'https://i.giphy.com/media/paMdZlRXlc96o/giphy.webp',
        'https://78.media.tumblr.com/98ee23de0b77f7a91d0802dc2ffd3ff6/tumblr_n62bti3Cg81swm1iso1_1280.gif',
        ]
        
        function display (F,C){
            if (C) return Math.round((F-32)*(5/9)) * '&deg; C';
            return Math.round(F) + '&deg; F';
        }
        
        $.getJSON('https://freegeoip.net/json/').done(function(location) {
            // console.log(location);
            
            
        $('#country').html(location.country_name);
        $('#state').html(location.region_name);
        $('#city').html(location.city);
        $('#latitude').html(location.latitude);
        $('#longitude').html(location.longitude);


        var lat= location.latitude
        var lon= location.longitude
        
        $.getJSON('https:api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=imperial'+APIKEY,
        function(data){
            apiData=data;
            // console.log(apiData);
            console.log(APIKEY);
        })
        
        })
        
        
})
