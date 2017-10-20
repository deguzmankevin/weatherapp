var precipitation = {
    "Clouds": "http://chromecastbg.alexmeub.com/images/1200_AF1QipN0SqLKlLFs-Q8N1Mg4F_BneQUSlTLPFf1uNYeW.jpg",
    "Clear": "http://chromecastbg.alexmeub.com/images/1200_Golden-Gate-Afternoon.jpg",
    "Rain": "http://photopeka.com/wp-content/uploads/2011/12/san-francisco-in-the-rain-L.jpg",
    "Snow": "http://chromecastbg.alexmeub.com/images/1200_IMG-1221.jpg",
    "Haze": "http://chromecastbg.alexmeub.com/images/1200_01-MG-3677.jpg",
    "Thunderstorm": "http://chromecastbg.alexmeub.com/images/1200_5-07-13-hodgeman-ks-lightning-supercell.png",
    "Mist": "http://chromecastbg.alexmeub.com/images/1200_DSC-0853.JPG",
    "Smoke": "https://wallpaperscraft.com/image/night_city_fires_light_helicopters_smoke_skyscrapers_21724_1920x1080.jpg",
    "Fog": "https://2sltl91mfmb53nr7sf3j0zxj-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/GoldenGateBridge_SanFrancisco_FoggySunset_Pano_CROP_MORE_Web_2000x855_rev0.jpg"
};
$(document).ready(function() {
  var url = "https://fcc-weather-api.glitch.me/api/current?";
  var temp = 0;
  var timezone = "";
  $.ajax( {
  url: '//freegeoip.net/json/',
  type: 'POST',
  dataType: 'jsonp',
  success: function(location) {
    // example where I update content on the page.
 
    var city = location.city;
   
    var lon = location.longitude;
    var lat = location.latitude;
    var cc = location.country_code;
    var zip = location.zip_code;
    timezone = location.time_zone;
 
    // $('#longitude').text(location.longitude);
    // $('#latitude').text(location.latitude);
    // $('#country-code').text(location.country_code);
    url = url + "lat=" + lat + "&lon=" + lon;
    
    $.ajax({
      url: url,
      success: function(data){
        temp = Math.round((data.main.temp*9/5) + 32);
        $('#TEMP').text(temp + "\u00B0" );
        var type = data.weather[0].main;
        $('#city').text(data.name);
        $('#TYPE').text(type);
        
        var time = moment().format('MMMM Do, h:mm a');

        $('#TIME').text(time);
        if (type === "Clouds"){
          $("#background").css('background-image', "url" + "(\"" + precipitation[type] + "\")");
          $('i').attr('class', "wi wi-cloudy");
          
        }
        else if (type === "Clear") {
            $("#background").css('background-image', "url" + "(\"" + precipitation[type] + "\")");
          $('i').attr('class', "wi wi-day-sunny");
        }
         else if (type === "Rain") {
            $("#background").css('background-image', "url" + "(\"" + precipitation[type] + "\")");
           $('i').attr('class', "wi wi-raindrops");
        }
         else if (type === "Snow") {
            $("#background").css('background-image', "url" + "(\"" + precipitation[type] + "\")");
           $('i').attr('class', "wi wi-snowflake-cold");
        }
        else if (type === "Haze") {
            $("#background").css('background-image', "url" + "(\"" + precipitation[type] + "\")");
           $('i').attr('class', "wi wi-day-haze");
        }
        else if (type === "Thunderstorm") {
            $("#background").css('background-image', "url" + "(\"" + precipitation[type] + "\")");
           $('i').attr('class', "wi wi-thunderstorm");
        }
        else if (type === "Mist") {
            $("#background").css('background-image', "url" + "(\"" + precipitation[type] + "\")");
           $('i').attr('class', "wi wi-dust");
        }
        else if (type === "Smoke") {
            $("#background").css('background-image', "url" + "(\"" + precipitation[type] + "\")");
            $('i').attr('class', "wi wi-smoke");
        }
        else if (type === "Fog") {
            $("#background").css('background-image', "url" + "(\"" + precipitation[type] + "\")");
            $('i').attr('class', "wi wi-day-fog");
        }
        
        
      },
  //      error: function(){
  //   alert('Something went wrong, sorry!');
  // }
    });
   
  }
} );
  
  
  $("#F").on("click", function(){
    if ($('#F').attr("value") === "F"){
    var celcius = Math.round(((temp - 32)*5)/9);
    $('#TEMP').text(celcius + "\u00B0" );
    $('#F').attr("value", "C");
    }
    else{
     
      $('#TEMP').text(temp + "\u00B0" );
      $('#F').attr("value", "F");
    }
  });
  
  });
