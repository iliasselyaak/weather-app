import React, {useState} from "react";
import TodayWeather from "./TodayWeather";
import Location from "./Location";
import MonthlyWeather from "./MonthlyWeather";
import Menu from "./Menu";
import Home from "./Home";

//Default state is this weeks weather and import API states. active state stores the section displayed(This week's or 3 months).
function Forecast (props) {
  const [active, setActive] = useState("TodayWeather")
  const {fetchWeather,updateCity,city,weather} = props;

  return (
    <div className>
      <centre>
        <header>
          {weather && city !== undefined ? (
          <>
          <Menu />
          <Location updateCity={updateCity} fetchWeather={fetchWeather} weather={weather}/>
          <h3 className={active === "TodayWeather" ? "thisWeek active" : "thisWeek"} onClick={() => setActive("TodayWeather")}>This week's</h3>
          <h3 className="appLine"></h3>
          <h3 className={active === "MonthlyWeather" ? "threeMonth active" : "threeMonth"} onClick={() => setActive("MonthlyWeather")}>3 months</h3>
          {active === "TodayWeather" && <TodayWeather weather={weather} />}
          {active === "MonthlyWeather" && <MonthlyWeather weather={weather}/>}
          </> ) : (
            <Home updateCity={updateCity} fetchWeather={fetchWeather} weather={weather}/>
          )} 
        </header>
      </centre>
    </div>
  );

}


export default Forecast;
