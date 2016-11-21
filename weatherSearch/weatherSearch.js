document.addEventListener("DOMContentLoaded",
    function (event) {

        function searchWeather (event) {
            var city =
                document.getElementById("city").value;
            var message = "<h2>Hello " + city + "!</h2>";

            document
                .getElementById("resultArea")
                .innerHTML = message;

            if (city === "London"|| city === "london") {
                        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=002799f99fa53882427e9e9d7c017a17", function(result){
                            var displayDeg = result.wind.deg;
                            $("#resultArea").append("Current Temperature is: " + JSON.stringify(displayDeg) + " F" + " <br> ");
                            var displaySpeed = result.wind.speed;
                            $("#resultArea").append("Wind Speed: " + JSON.stringify(displaySpeed) + " mph" + " <br> ");

                        });

            } else {
                var errorMessage = "Sorry, the city '" + city + "' does not exist."
                document
                    .getElementById("resultArea")
                    .innerHTML = errorMessage
            }
        }

        // Unobtrusive event binding
        document.querySelector("button")
            .addEventListener("click", searchWeather);

    }
);
