const WeatherDetail = ({ label, value, darkTheme }) => (
  <div className={`p-3 rounded ${darkTheme ? "bg-gray-700" : "bg-gray-100"}`}>
    <div className="text-sm opacity-70">{label}</div>
    <div>{value}</div>
  </div>
);

export default WeatherDetail;