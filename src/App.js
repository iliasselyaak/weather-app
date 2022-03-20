import React, {useState} from "react";
import TodayWeather from "./components/TodayWeather";
import Location from "./components/Location";
import Menu from "./components/Menu";
import MonthlyWeather from "./components/MonthlyWeather";
import axios from "axios";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css'


function App () {
  const [active, setActive] = useState("TodayWeather")
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e98a061ce1ac1526925cefbb2d9796ff`,
    );
    updateWeather(response.data);
  };

  return (
    <div className="App">
      <centre>
        <header>
          <Menu />
          <Location updateCity={updateCity} fetchWeather={fetchWeather} />
          <h3 className={active === "TodayWeather" ? "thisWeek active" : "thisWeek"} onClick={() => setActive("TodayWeather")}>This week's</h3>
          <h3 className="appLine"></h3>
          <h3 className={active === "MonthlyWeather" ? "threeMonth active" : "threeMonth"} onClick={() => setActive("MonthlyWeather")}>3 months</h3>
          {active === "TodayWeather" && <TodayWeather weather={weather} city={city}/>}
          {active === "MonthlyWeather" && <MonthlyWeather/>}  
        </header>
      </centre>
    </div>
  );

}


export default App;
