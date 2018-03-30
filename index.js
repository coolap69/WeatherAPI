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
      
        // var showImage = document.getElementById("#container"); 
    
      if (currentWeather === "clouds"){
       $('#container').css('background-image', 'url(https://apod.nasa.gov/apod/image/1704/NightGlows_TG_2500.jpg');
      }
      else if (currentWeather === "light rain", "rain"){
       $('#container').css('background-image', 'url(https://c1.staticflickr.com/9/8520/8490462966_cbea31aa70_b.jpg');
      }
       else if (currentWeather === "snow"){
       $('#container').css('background-image', 'url(https://handluggageonly.co.uk/wp-content/uploads/2014/12/New-York-City-Covered-in-Snow-00.jpg');
      }
       else if (currentWeather === "clear"){
       $('#container').css('background-image', 'url(https://apod.nasa.gov/apod/image/1704/NightGlows_TG_2500.jpg');
      }
       else if (currentWeather === "mist"){
       $('#container').css('background-image', 'url(https://bloximages.chicago2.vip.townnews.com/thesunchronicle.com/content/tncms/assets/v3/editorial/e/6d/e6d8850b-9e78-546f-a1ec-6fb8e97ac292/59efefaae9ba1.image.jpg?resize=1200%2');
      }
       else if (currentWeather === "thunder"){
       $('#container').css('background-image', 'url(https://valuebound.com/sites/default/files/2017-05/thunder-city.jpg');
      }

            
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
                // render(data,C);
            });
        });
        
        });
        
        
});
