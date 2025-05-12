import WeatherDetail from "./WeatherDetail";

const WeatherCard = ({ weatherData, darkTheme }) => (
  <div
    className={`rounded-lg overflow-hidden ${
      darkTheme ? "bg-gray-800" : "bg-white shadow-lg"
    }`}
  >
    <div
      className={`p-4 ${darkTheme ? "bg-gray-700" : "bg-blue-500 text-white"}`}
    >
      <h2 className="text-xl font-bold">
        {weatherData.name}, {weatherData.sys.country}
      </h2>
    </div>

    <div className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-4xl font-bold mb-2">
            {Math.round(weatherData.main.temp)}°C
          </div>
          <div className="capitalize">{weatherData.weather[0].description}</div>
        </div>

        <div className="text-center">
          {weatherData.weather[0].icon && (
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="w-16 h-16"
            />
          )}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <WeatherDetail
          label="Sensación"
          value={`${Math.round(weatherData.main.feels_like)}°C`}
          darkTheme={darkTheme}
        />
        <WeatherDetail
          label="Humedad"
          value={`${weatherData.main.humidity}%`}
          darkTheme={darkTheme}
        />
        <WeatherDetail
          label="Viento"
          value={`${(weatherData.wind.speed * 3.6).toFixed(1)} km/h`}
          darkTheme={darkTheme}
        />
        <WeatherDetail
          label="Presión"
          value={`${weatherData.main.pressure} hPa`}
          darkTheme={darkTheme}
        />
      </div>
    </div>
  </div>
);

export default WeatherCard;