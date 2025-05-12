const LoadingSpinner = () => (
  <div className="text-center py-10">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
    <p className="mt-2">Cargando...</p>
  </div>
);

export default LoadingSpinner;
