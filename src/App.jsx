import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImgWeatherMain from "./assets/Weather-main.png";
import WeatherDetail from "./WeatherDetail"
import axios from 'axios';

const KelvinToCelsius = (fahrenheit) => {
  return ((fahrenheit - 273.15).toFixed(2))
};

function App() {
  const API_KEY = "b8e15ba1c2520e8abc43f096be888839";
  const [city, setCity] = useState("");

  const [weather, setWeather] = useState({
  temp: 30,
  humidity: 50,
  minTemp: 30,
  minTemp: 15,
  feelslike: 32,
});

const getWeatherData = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
const weatherData = response.data;

setWeather({
temp: weatherData.main.temp,
visibility: weatherData.visilibility,
humidity: weatherData.main.humidity,
minTemp: weatherData.main.temp_min,
maxTemp: weatherData.main.temp_max,
feelslike: weatherData.main.feels_like,});
  };

 

  useEffect(() => {
    getWeatherData();
  },[city]);

  return (
    <div className="bg-blue-300 min-h-screen pb-10">
      <img src={ImgWeatherMain} alt="weather main" className="h-[300px] mx-auto"/>
    <br/>

     <input
     type="text"
     value={city}
     onChange={(e) => setCity(e.target.value)}
     className="border-2 border-blue-400 p-2 pb-3 w-1/2 block mx-auto bg-white text-3xl text-center focus:outline-none rounded-full h-13"/>
     
     <div className="bg-white opacity-80 p-4 m-2 w-1/2 mx-auto rounded-lg text-2xl ">
      <WeatherDetail detail="Temperature" value={`${KelvinToCelsius(weather.temp)} °C`}/> 

      <WeatherDetail detail="Feels Like" value={`${KelvinToCelsius(weather.feelslike)} °C`}/>

      <WeatherDetail detail="Min Temp" value={`${KelvinToCelsius(weather.minTemp)}°C`}/>

      <WeatherDetail detail="Max Temp" value={`${KelvinToCelsius(weather.maxTemp)} °C`}/>
     
      <WeatherDetail detail="Humidity" value={`${weather.humidity} %`}/>
     </div>
     </div>
  
  );
}

export default App
 