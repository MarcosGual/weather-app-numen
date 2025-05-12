const SearchForm = ({ city, setCity, handleSubmit, darkTheme }) => (
  <div className="mb-6">
    <div className="flex">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Ingresa una ciudad..."
        className={`flex-grow p-2 rounded-l border ${
          darkTheme ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
        }`}
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
      >
        Buscar
      </button>
    </div>
  </div>
);

export default SearchForm;