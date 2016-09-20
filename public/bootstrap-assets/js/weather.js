$(document).ready(function(){
    function displayLocation(latitude,longitude){
    var request = new XMLHttpRequest();

   var method = 'GET';
   var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true';
   var async = true;

   request.open(method, url, async);
   request.onreadystatechange = function(){
   if(request.readyState == 4 && request.status == 200){
     var data = JSON.parse(request.responseText);
     var addressComponents = data.results[0].address_components;
     for(i=0;i<addressComponents.length;i++){
        var types = addressComponents[i].types
        //alert(types);
        if(types=="locality,political"){

           city=(addressComponents[i].long_name);
           city=city.replace(/ /g,"_");

         }
         if(types=="administrative_area_level_1,political"){

            state=(addressComponents[i].long_name);
            state=state.replace(/ /g,"_");

            var weather = new XMLHttpRequest();
            weather.open("GET", "https://api.wunderground.com/api/fa5715ba5adff2ac/conditions/q/"+state+"/"+city+".json", false);
            weather.send(null);

            var r = JSON.parse(weather.response);

            var dis = "Current location: " + r.current_observation.display_location.full + "  <p>";
            var temp = r.current_observation.temp_f+ "  <p>";
            var wind = r.current_observation.weather+ "  <p>";

            function getWeather(id,res) {
              document.getElementById(id).innerHTML=res;
            }
            getWeather("weather",dis);
            getWeather("temp",temp);
            getWeather("wind",wind);

          }
       }
    //alert(address.city.short_name);
   }
};
request.send();
};

var successCallback = function(position){
var x = position.coords.latitude;
var y = position.coords.longitude;
displayLocation(x,y);
};


navigator.geolocation.getCurrentPosition(successCallback);


});
