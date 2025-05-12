import { useState } from 'react';
import { fetchCityWeather } from '../services/weatherService';
import { updateCityHistory } from '../utils/localStorage';

const useWeatherAPI = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastCities, setLastCities] = useState([]);
  
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchCityWeather(cityName);
      setWeatherData(data);
      
      const updatedCities = updateCityHistory(cityName, lastCities);
      setLastCities(updatedCities);
      
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };
  
  return { weatherData, loading, error, lastCities, setLastCities, fetchWeather };
};

export default useWeatherAPI;