import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const api_key = process.env.REACT_APP_WEATHER_API_KEY;

export default function DisplayCountry({ country }) {
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${country.capital}&aqi=no`
      )
      .then((res) => {
        const weatherData = {
          temp: res.data.current.temp_c,
          icon: res.data.current.condition.icon,
          wind: res.data.current.wind_mph,
        };
        setCurrentWeather(weatherData);
      });
  }, []);

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital : {country.capital}</p>
      <p>Area : {country.area}</p>
      <h2>Languages : </h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="" />
      <h1>Weather in {country.capital}</h1>
      <p>Temperatur : {currentWeather.temp} Celcius</p>
      <img src={currentWeather.icon} alt="weather-icon" />
      <p>Wind : {(currentWeather.wind / 3.16).toFixed(2)} m/s</p>
 
    </>
  );
}
