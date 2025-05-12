const RecentSearches = ({ lastCities, loadCity, darkTheme }) => {
  if (lastCities.length === 0) return null;

  return (
    <div
      className={`mb-6 p-3 rounded ${
        darkTheme ? "bg-gray-800" : "bg-white shadow"
      }`}
    >
      <h2 className="text-sm font-semibold mb-2">Búsquedas recientes:</h2>
      <div className="flex flex-wrap gap-2">
        {lastCities.map((cityName, index) => (
          <button
            key={index}
            onClick={() => loadCity(cityName)}
            className={`text-xs px-2 py-1 rounded ${
              darkTheme
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {cityName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;