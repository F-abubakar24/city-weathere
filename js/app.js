const API_KEY = `98278f659ea51fd2d28d91a3acee2b50`;
// ============== lode weather data ==============;
const searchButton = () => {
    const city = document.getElementById('city-name')
    const cityValue = city.value;
    // cleare data
    city.value = '';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => displayweatherData(data))
}


// ============== display weather data ==============;
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}


const displayweatherData = weather => {
    console.log(weather);
    setInnerText('city', weather.name);
    setInnerText('temperature', weather.main.temp)
    setInnerText('weather', weather.weather[0].main);
    // set weather icon;
    const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const img = document.getElementById('icon');
    img.setAttribute('src', url);
}