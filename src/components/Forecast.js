import React, {useState} from "react";
import TodayWeather from "./TodayWeather";
import Location from "./Location";
import MonthlyWeather from "./MonthlyWeather";
import Menu from "./Menu";
import Home from "./Home";
import axios from "axios";
import { CgSearch } from "react-icons/cg";

function Forecast () {
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
    <div>
      <centre>
        <header>
          {city && weather ? (
          <>
          <Menu />
          <Location updateCity={updateCity} fetchWeather={fetchWeather} weather={weather}/>
          <h3 className={active === "TodayWeather" ? "thisWeek active" : "thisWeek"} onClick={() => setActive("TodayWeather")}>This week's</h3>
          <h3 className="appLine"></h3>
          <h3 className={active === "MonthlyWeather" ? "threeMonth active" : "threeMonth"} onClick={() => setActive("MonthlyWeather")}>3 months</h3>
          {active === "TodayWeather" && <TodayWeather weather={weather} city={city}/>}
          {active === "MonthlyWeather" && <MonthlyWeather/>}
          </> ) : (
            <Home updateCity={updateCity} fetchWeather={fetchWeather} weather={weather}/>
          )} 
        </header>
      </centre>
    </div>
  );

}


export default Forecast;
