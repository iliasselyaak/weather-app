import React, {useState} from "react";
import TodayWeather from "./components/TodayWeather";
import Location from "./components/Location";
import Menu from "./components/Menu";
import MonthlyWeather from "./components/MonthlyWeather";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const App = () => {
  const [active, setActive] = useState("TodayWeather")
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
            <SimpleBar style={{ height: '680px',marginTop:"120px", mixBlendMode: "hard-light"}}>
              {<MonthlyWeather/>}
            </SimpleBar>
          }  
        </header>
      </centre>
    </div>
  );
}


export default App;
