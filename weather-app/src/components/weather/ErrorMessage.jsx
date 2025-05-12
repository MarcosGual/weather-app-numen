const ErrorMessage = ({ error, darkTheme }) => (
  <div
    className={`p-4 rounded mb-6 ${
      darkTheme ? "bg-red-900" : "bg-red-100 text-red-700"
    }`}
  >
    <p>{error}</p>
  </div>
);

export default ErrorMessage;