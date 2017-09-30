$(function () {
    $("#checkButton").click(function () {
        $("#resultPanel").empty();
        var city = $('#countryName').val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=7c71df45ef574b6ae3f2c00720f00be5";

        $.get(url, function (data) {
            console.log(data);
            var str = data.sys.country;
            var country = str.toLowerCase();
            console.log(country);
            var row = "<center><br><div class='card'><div class='card-header bg-primary' style='color:white;'> <h5><strong>Weather </strong> Result</h5></div><div class='card-block'>" +
                '<br><div class="row">' +
                '<div class="col-sm-6">' +
                '<div class="card">' +
                '<div class="card-block">' +
                '<h5 class="card-title"><i class="fa fa-map-marker" aria-hidden="true" style="color:#0275d8;"></i>&nbsp<strong> Country </strong>: &nbsp&nbsp&nbsp' + data.name + ' ' +
                '&nbsp<img src="http://openweathermap.org/images/flags/' + country + '.png" alt=' + data.sys.country + ' height="20" width="25"><br></h5>' +
                '</div>' +
                '</div><br>' +
                '<div class="card">' +
                '<div class="card-block">' +
                '<h5 class="card-title"><i class="fa fa-thermometer-empty" aria-hidden="true" style="color:#0275d8;"></i>&nbsp<strong> Temp </strong>: &nbsp&nbsp&nbsp' + data.main.temp / 10 + ' C <br></h5>' +
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
                '</div>';
            $('#resultPanel').append(row);
        });
    });
});

