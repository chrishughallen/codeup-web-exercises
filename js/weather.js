'use strict'

var searchWeather = $('#searchWeather');

$('#searchBtn').on('click', function(){
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ "address": searchWeather.val() }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            defaultWeather = results[0].geometry.location;
            map.setCenter(defaultWeather);
            initWeather(defaultWeather);
            addMarker(defaultWeather, map);
            // searchWeather.val($('#city').text());
        } else {

            alert("Geocoding was not successful - STATUS: " + status);
        }
    });
});


var defaultWeather = {lat:29.4241, lng:-98.4936};

initWeather(defaultWeather);

$('#forecastLength').on('change', function(){
    initWeather(defaultWeather);
});

function initWeather(location) {
    var forecastLength = $('#forecastLength').val();
    var request = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "6cde4ba95d87ed470cbe4870230de2d5",
        lat:location.lat,
        lon:location.lng,
        units: "imperial",
        cnt: forecastLength
    });
var html
    request.done(function (response) {
        console.log(response);
        var list = response.list;
        html = '';
        $('#city').html(response.city.name + ', ' + response.city.country);
        list.forEach(function (day) {
            var iconCode = day.weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
            html += ('<div class="three-days">');
            html += ( '<h1>' + day.temp.max.toFixed(0) + '/' + day.temp.min.toFixed(0) + '</h1>');
            html += ("<img src='" + iconUrl + "'>");
            html += ('<p>' + day.weather[0].description + '</p>');
            html += ('<p><span>humidity: </span>' + day.humidity + '</p>');
            html += ('<p><span>wind: </span>' + day.speed + '</p>');
            html += ('<p><span>pressure: </span>' + day.pressure + '</p>');
            html += ('</div>');
        });
        $('#ForecastDiv').html(html);
    });

}

var map = new google.maps.Map(document.getElementById('map'),
    {zoom: 10, center: {lat: 29.4241, lng: -98.4936}
    });

map.addListener('click', function (e) {
    defaultWeather = e.latLng;
    addMarker(defaultWeather, map);
});



// Function to drop a marker and send the lat/lng into initWeather function, and recenter the map.
var marker;
function addMarker(location, map){
    if(marker){
        marker.setPosition(location);
        initWeather(location);
        searchWeather.attr('placeholder', 'Search by city..');
    }
    else{
        marker = new google.maps.Marker({
            position: location,
            map: map,
            animation: google.maps.Animation.DROP

        });
        initWeather(location);
        searchWeather.attr('placeholder', 'Search by city..');
    }

    map.panTo(location);
}


