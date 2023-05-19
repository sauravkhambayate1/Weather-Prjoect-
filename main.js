const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4b212473fcmshfcee89172ad0965p183917jsn0eee2e867f85',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
function getWeather(city) {
    cityname.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            // temp.innerHTML = response.temp
            temp1.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity1.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed1.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        }
        )
        .catch(err => console.error(err));
}
document.getElementById('search-btn').addEventListener('click', (e) => {
    e.preventDefault()
    let random = document.getElementById('input-city').value;
//    document.querySelector('.celsius').textContent = temp.innerHTML;
//    document.querySelector('.celsius').textContent = min_temp.innerHTML;
//    document.querySelector('.celsius').textContent = humidity.innerHTML;
//    document.querySelector('.celsius').textContent = sunrise.innerHTML;
//    document.querySelector('.celsius').textContent = sunset.innerHTML;
//    document.querySelector('.celsius').textContent = wind_degrees.innerHTML;
//    document.querySelector('.celsius').textContent = wind_speed.innerHTML;
//    document.querySelector('.celsius').textContent = cloud_pct.innerHTML;
//    document.querySelector('.celsius').textContent = feels_like.innerHTML;
//    document.querySelector('.celsius').textContent = max_temp.innerHTML;
   document.querySelector('.celsius').textContent = humidity1.innerHTML;
   document.querySelector('.celsius').textContent = temp1.innerHTML;
   document.querySelector('.celsius').textContent = wind_speed1.innerHTML;
    getWeather(random)
})


