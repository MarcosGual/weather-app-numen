export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(
    key,
    typeof value === "object" ? JSON.stringify(value) : value
  );
};

export const getFromLocalStorage = (key, isObject = false) => {
  const item = localStorage.getItem(key);
  return isObject && item ? JSON.parse(item) : item;
};

export const updateCityHistory = (city, currentCities) => {
  const updatedCities = [
    city,
    ...currentCities.filter((c) => c !== city),
  ].slice(0, 5);
  saveToLocalStorage("lastCities", updatedCities);
  saveToLocalStorage("lastCity", city);
  return updatedCities;
};
