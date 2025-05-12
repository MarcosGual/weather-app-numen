import { constants } from "../constants/config";

export const fetchCityWeather = async (cityName) => {
  const response = await fetch(
    `${constants.WEATHER_API_URL}/weather?q=${cityName}&appid=${constants.API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Ciudad no encontrada");
  }

  return await response.json();
};
