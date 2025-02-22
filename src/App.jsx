
import { useState } from 'react';
import WeatherDetails from './components/WeatherDetails';
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch';

const App = () => {
  // src/App.jsx
const [weather, setWeather] = useState({});

  const fetchData = async (city) => {
    const data = await weatherService.show(city);

    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };
  console.log(weather);
  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;
