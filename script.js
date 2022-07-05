let weather = {
    apiKey: "1ed27378011422448a05d16e3b61d76d"
    , fetchWeather: function (city) {
        fetch("http://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((Response) => Response.json())
            .then((data) => this.displayweather(data));
    },
    displayweather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innertext = "weather in" + name;
        document.querySelector(.icon).src
    }
};