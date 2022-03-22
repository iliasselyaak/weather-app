import Forecast from "./components/Forecast";
import Suggestion from"./components/Suggestion"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import React, {useState} from "react";


function App () {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e98a061ce1ac1526925cefbb2d9796ff`,
    );
    updateWeather(response.data);
    var form = document.getElementById("form");
    form.reset();
  };

  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path='/' element={<Forecast fetchWeather={fetchWeather} updateCity={updateCity} city={city} weather={weather}/>} />
          <Route path='suggestion' element={<Suggestion/>} />
        </Routes>
      </Router>
    </div>
  );

}


export default App;
