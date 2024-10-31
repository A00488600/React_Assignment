// src/components/MyTown.js
import React, { useState, useEffect } from 'react';

function MyTown() {
  const [weather, setWeather] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const cityName = 'Hyderabad';
  const lat = 17.385;
  const lon = 78.4867;
  const apiKey = '162f3d4ba2549e48d199b3a4c40af5a0';

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  }, [lat, lon, apiKey]);

  const toggleTemperature = () => {
    setIsCelsius(!isCelsius);
  };

  const getTemperature = () => {
    if (weather) {
      return isCelsius
        ? `${weather.main.temp.toFixed(1)}°C`
        : `${((weather.main.temp * 9) / 5 + 32).toFixed(1)}°F`;
    }
    return '';
  };

  const getWeatherImage = () => {
    if (weather) {
      if (weather.main.temp <= 10) return './public/cold.png';
      if (weather.main.temp > 10 && weather.main.temp < 20)
        return './public/mild.png';
      return './public/sunny.png';
    }
    return '';
  };

  return (
    <div className="page-container">
      <h1>I live in Hyderabad, India</h1>
      <img
        src="https://static.toiimg.com/img/104444282/Master.jpg"
        alt="Hyderabad"
        className="town-image"
        width="600px"
      />

      {weather ? (
        <div className="weather-info">
          <p>Current Temperature: {getTemperature()}</p>
          <img
            src={getWeatherImage()}
            alt="Weather"
            className="weather-image"
            width="50px"
          />
          <button onClick={toggleTemperature}>
            {isCelsius ? 'Change to °F' : 'Change to °C'}
          </button>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default MyTown;
