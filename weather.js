let key={
    "api_key": "0ae282b86df70deb82da4921fd9bcfdd",
    get_Weather ( city ) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid="
            + this.api_key
            ).then( (response) => response.json() ).then( (data) => this.displayWeather(data) );
    },
    displayWeather: function(data) {
        const { name } = data;
        const { description, icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log( name, description, temp, humidity, speed); 
        document.querySelector(".city").innerText = "Weather in "+ name;
        document.querySelector(".temp").innerText = Math.round(temp)+" °C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText ="Humidity: " + humidity+"%";
        document.querySelector(".wind").innerText = "Wind: "+speed+"Km/hr";
        document.querySelector(".icon").src="http://openweathermap.com/img/wn/"+icon+"@2x.png";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + name + "')";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        this.get_Weather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".__searchButton").addEventListener("click", function () {
    key.search(); 
});
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if( event.key == "Enter" ){
        key.search();
    }
});
window.onload(document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?landscape)");