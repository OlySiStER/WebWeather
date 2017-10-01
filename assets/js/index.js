$(function () {
    $("#checkButton").click(function () {
        $("#resultPanel").empty();
        var city = $('#countryName').val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=7c71df45ef574b6ae3f2c00720f00be5";

        $.get(url, function (data) {
            console.log(data);
            
            var str2 = data.sys.country;
            var country = str2.toLowerCase();
            var row = "<center><br><div class='card'><div class='card-header bg-primary' style='color:white;'> <h5><strong>Weather </strong> Result</h5></div>" +
                '<div class="card-block">' +
                '<br><div class="row">' +
                '<div class="col-sm-6">' +
                '<div class="card">' +
                '<div class="card-block">' +
                '<h5 class="card-title"><i class="fa fa-map-marker" aria-hidden="true" style="color:#0275d8;"></i>&nbsp<strong> Country </strong>: &nbsp&nbsp&nbsp' + data.name + ' ' +
                '&nbsp<img src="http://openweathermap.org/images/flags/' + country + '.png" alt=' + data.sys.country + ' height="20" width="25"></h5>' +
                '</div>' +
                '</div><br>' +
                '<div class="card">' +
                '<div class="card-block">' +
                '<h5 class="card-title"><i class="fa fa-thermometer-empty" aria-hidden="true" style="color:#0275d8;"></i>&nbsp<strong> Temp </strong>: &nbsp&nbsp&nbsp' + (data.main.temp - 273.15).toFixed(2) + ' &#176;C <br></h5>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-sm-6">' +
                '<div class="card">' +
                '<div class="card-block">' +
                '<h5 class="card-title"><i class="fa fa-cloud" aria-hidden="true" style="color:#0275d8;"></i>&nbsp<strong> Weather </strong>: &nbsp&nbsp&nbsp' + data.weather[0].description + '<br></h5>' +
                '<center><img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" alt=' + data.weather[0].icon + ' height="100" width="100"></center>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<br><div class="row">' +
                '<div class="col-sm-6">' +
                '<div class="card">' +
                '<div class="card-block">' +
                '<h5 class="card-title"><i class="fa fa-thermometer-empty" aria-hidden="true" style="color:#0275d8;"></i>&nbsp<strong> Temp Max </strong>: &nbsp&nbsp&nbsp' + (data.main.temp_max - 273.15).toFixed(2) + ' &#176;C <br></h5>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-sm-6">' +
                '<div class="card">' +
                '<div class="card-block">' +
                '<h5 class="card-title"><i class="fa fa-thermometer-empty" aria-hidden="true" style="color:#0275d8;"></i>&nbsp<strong> Temp Min </strong>: &nbsp&nbsp&nbsp' + (data.main.temp_min - 273.15).toFixed(2) + ' &#176;C <br></h5>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            row += '<br><br><div id="openweathermap-widget-11"></div>' +
                "<script src='http://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script>" +
                '<script>' +
                "window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  " +
                "window.myWidgetParam.push({" +
                'id: 11,' +
                'cityid: ' + data.id + ',' +
                "appid: 'bd5e378503939ddaee76f12ad7a97608'," +
                "units: 'metric'," +
                "containerid: 'openweathermap-widget-11',  " +
                '}); ' +
                '(function() {' +
                "var script = document.createElement('script');" +
                'script.async = true;script.charset = "utf-8";' +
                'script.src = "http://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";' +
                "var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  " +
                '})();</script>';

            $('#resultPanel').append(row);
        });
    });
});