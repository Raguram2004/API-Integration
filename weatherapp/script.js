const apiKey = "06cf7c3a529ec5c5a3ae23d41154aba7"; 
async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("weather-result").innerHTML = `<p style="color:red;">${data.message}</p>`;
            return;
        }

        document.getElementById("weather-result").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        document.getElementById("weather-result").innerHTML = `<p style="color:red;">Error fetching data</p>`;
    }
}
