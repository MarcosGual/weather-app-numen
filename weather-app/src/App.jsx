import { useEffect, useState } from 'react';
import { getFromLocalStorage } from './utils/localStorage';
import SearchForm from './components/weather/SearchForm';
import RecentSearches from './components/weather/RecentSearches';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorMessage from './components/weather/ErrorMessage';
import WeatherCard from './components/weather/WeatherCard';
import Footer from './components/ui/Footer';
import useTheme from './hooks/useTheme';
import useWeatherAPI from './hooks/useWeatherAPI';
import './index.css';

function App() {
  const [city, setCity] = useState('');
  const { darkTheme, toggleTheme } = useTheme();
  const { weatherData, loading, error, lastCities, setLastCities, fetchWeather } = useWeatherAPI();
  
  useEffect(() => {
    const savedCity = getFromLocalStorage('lastCity');
    const savedCities = getFromLocalStorage('lastCities', true) || [];
    
    if (savedCities.length > 0) {
      setLastCities(savedCities);
    }
    
    if (savedCity) {
      setCity(savedCity);
      fetchWeather(savedCity);
    }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };
  
  const loadCity = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
  };
  
  return (
    <div className={`min-h-screen p-6 ${darkTheme ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
        <SearchForm city={city} setCity={setCity} handleSubmit={handleSubmit} darkTheme={darkTheme} />
        <RecentSearches lastCities={lastCities} loadCity={loadCity} darkTheme={darkTheme} />
        
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage error={error} darkTheme={darkTheme} />}
        {weatherData && !loading && <WeatherCard weatherData={weatherData} darkTheme={darkTheme} />}
        
        <Footer />
      </div>
    </div>
  );
}

export default App;