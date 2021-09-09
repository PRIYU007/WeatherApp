import { useEffect, useState } from 'react';
import './styles/app.scss';
import axios from 'axios';
import WeatherCompo from './components/WeatherCompo';
import Input from './components/Input';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Delhi&aqi=no`
      )
      .then(data => {
        setWeather(data.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <Input weather={weather} setWeather={setWeather} />

      <WeatherCompo weather={weather} setWeather={setWeather} />
    </div>
  );
}

export default App;
