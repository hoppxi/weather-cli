import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.OWM_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Define types for the weather data
type WeatherData = {
  temp: number;
  description: string;
  humidity: number;
  wind_speed: number;
};

const getWeather = async (
  city: string,
  units: string
): Promise<WeatherData> => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=${units}`;
  console.log(url);
  const response = await axios.get(url);
  const data = response.data;

  return {
    temp: data.main.temp,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    wind_speed: data.wind.speed,
  };
};

export { getWeather };
