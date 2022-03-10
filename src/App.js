import WeatherWidget from "./components/WeatherWidget";
import TodayWeather from "./components/TodayWeather";
import Location from "./components/Location";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <centre>
        <header>
          <Menu />
          <Location location='Hall Hill Farm, Durham'/>
          <TodayWeather />
          <h3 className="thisWeek">This week's</h3>
          <h3 className="appLine"></h3>
          <h3 className="threeWeek">3 months</h3>
        </header>
      </centre>
    </div>
  );
}

export default App;
