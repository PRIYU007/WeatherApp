const WeatherCompo = ({ weather }) => {
  return (
    <div className="weather-container">
      {weather && (
        <div className="weather-details">
          <h1>
            {weather.location.name},{weather.location.country}
          </h1>
          <div>
            <h1>Tempature: {weather.current.temp_c}°C</h1>
            <h2>Precipitation: {weather.current.precip_in}%</h2>
            <h2>Humidity: {weather.current.humidity}%</h2>
            <h2>Wind: {weather.current.wind_kph}Km/h</h2>
          </div>
        </div>
      )}
    </div>
  );
};
export default WeatherCompo;
