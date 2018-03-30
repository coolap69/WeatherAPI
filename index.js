/*global $ APIKEY*/

$(function(){
    var C = false;
    var apiData;
    
    // backgroundImg = [ 
    //     'https://i.giphy.com/media/paMdZlRXlc96o/giphy.webp',
    //     'https://78.media.tumblr.com/98ee23de0b77f7a91d0802dc2ffd3ff6/tumblr_n62bti3Cg81swm1iso1_1280.gif',
    //     'http://farmersalmanac.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg',
    //     'http://c1.staticflickr.com/8/7393/11375147803_0f453d8676_b.jpg'
    //     ]
        
        function display (F,C){
            if (C) return Math.round((F-32)*(5/9)) * '&deg; C';
            return Math.round(F) + '&deg; F';
        }
        
        function render (data, C){
            var currentWeather = data.weather[0].description;
            var currentTemp = display(data.main.temp,C);
            var icon = data.weather[0].icon;
            
            
            $('#currentTemp').html(currentTemp);
            $('#currentWeather').html(currentWeather);
            // $('#icon').html(currentWeather);

            
            var apiIcon ='https://openweathermap.org/img/w/' + icon + '.png ';
            $('#icon').html ('<img src=' + apiIcon + '>');
               // console.log(apiIcon)
        }
        
        
        $.getJSON('https://freegeoip.net/json/').done(function(location) {
            // console.log(location);
            
            
        $('#country').html(location.country_name);
        $('#state').html(location.region_name);
        $('#city').html(location.city);
        $('#latitude').html(location.latitude);
        $('#longitude').html(location.longitude);


        // var lat= location.latitude
        // var lon= location.longitude
        
        $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat='+location.latitude + '&lon='+ location.longitude +'&units=imperial'+APIKEY,
        function(data){
            apiData=data;
            // console.log(apiData);
            // console.log(APIKEY);
            
            render(apiData,C);
            
            
            $('#toggle').click(function(){
                C= !C;
                render(data,C);
            });
        });
        
        });
        
        
});
