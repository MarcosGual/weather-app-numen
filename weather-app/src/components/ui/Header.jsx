const Header = ({ darkTheme, toggleTheme }) => (
  <header className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-bold">Visor de Clima</h1>
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full ${
        darkTheme ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-white"
      }`}
    >
      {darkTheme ? "☀️" : "🌙"}
    </button>
  </header>
);

export default Header;