import React, {useState} from "react";
import TodayWeather from "./components/TodayWeather";
import Location from "./components/Location";
import Menu from "./components/Menu";
import MonthlyWeather from "./components/MonthlyWeather";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css'

const api = {
  key: "d98b1ba657470abde0f8ef21e84b7af8", 
  base: "https://api.agromonitoring.com/agro/1.0/weather?"
}

const App = () => {
  const [active, setActive] = useState("TodayWeather")
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `${api.base}weather?&lat=51.5072&lon=0.1276&units=metric&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

    const dateBuilder = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`
  }
/*
    const moment = require('moment');
    const todayTime = moment().format('Do [of] MMMM YYYY');
*/

  return (
    <div className="App">
      <centre>
        <header>
          <Menu />
          <Location location='Hall Hill Farm, Durham'/>
          <h3 className={active === "TodayWeather" ? "thisWeek active" : "thisWeek"} onClick={() => setActive("TodayWeather")}>This week's</h3>
          <h3 className="appLine"></h3>
          <h3 className={active === "MonthlyWeather" ? "threeMonth active" : "threeMonth"} onClick={() => setActive("MonthlyWeather")}>3 months</h3>
          {active === "TodayWeather" && <TodayWeather/>}
          {active === "MonthlyWeather" &&
            <SimpleBar style={{ height: '680px',marginTop:"120px"}}>
              {<MonthlyWeather/>}
            </SimpleBar>
          }  
        </header>
      </centre>
    </div>
  );

}


export default App;
