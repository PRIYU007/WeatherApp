import { useState } from 'react';
import axios from 'axios';

const Input = ({ weather, setWeather }) => {
  const [input, setInput] = useState('');
  const inputMessage = e => {
    setInput(e.target.value);
  };
  const searchHandler = e => {
    e.preventDefault();
    setInput('');
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}&aqi=no`
      )
      .then(data => {
        setWeather(data.data);
      })
      .catch(err => console.error(err));
  };
  return (
    <form onSubmit={searchHandler} className="form">
      <h2>Enter The Location</h2>
      <input onChange={inputMessage} type="text" className="input" />
      <button className="search-btn">Search</button>
    </form>
  );
};
export default Input;
