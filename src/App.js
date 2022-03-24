import Forecast from "./components/Forecast";
import Suggestion from"./components/Suggestion"
import HourlyForecast from "./components/HourlyForecast";
import DetailedForecast from "./components/DetailedForecast";
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

  const description = `${weather?.list[0]?.weather[0]?.main}`;
  return (
    <div className="app"
    id={
      (typeof description !== "undefined")
        ? ((description === "Clear")
          ? "sunnyApp"
          : (description === "Rain")
            ? "rainyApp"
            : (description === "Clouds")
              ? "cloudyApp"
              : (description === "Snow")
                ? "snowApp"
                : (description === "Mist")
                  ? "mistApp"
                  : (description === "Thunderstorm")
                    ? "thunderApp"
                    : "defaultApp")
        : "defaultApp"}
    >
    <Router>
        <Routes>
          <Route path='/' element={<Forecast fetchWeather={fetchWeather} updateCity={updateCity} city={city} weather={weather}/>} />
          <Route path='suggestion' element={<Suggestion weather={weather}/>} />
          <Route path="hourlyforecast" element={<HourlyForecast weather={weather}/>} />
          <Route path="detailedforecast/:i" element={<DetailedForecast weather={weather}/>} />
        </Routes>
      </Router>
    </div>
  );

}


export default App;
