import WeatherButton from "./WeatherWidget";
import TodayWidget from "./TodayWidget";
import logo from "../logo.png";

 const TodayWeather = (props) => {
     const days = addDays();
     const {weather} = props;
     return (
         <div>
         <img src={logo} height="38" width="36" className="logo"/>
         <h3 className="tW">Today's Weather</h3>
         <TodayDate/>
         <TodayWidget 
            dayTemp={`${Math.floor(weather?.list[0]?.main?.temp_max - 273)}°C`}
            nightTemp={`${Math.floor(weather?.list[0]?.main?.temp_min - 273)}°C`} 
            humidity={`${weather?.list[0]?.main?.humidity}`}
            wind={`${Math.floor(weather?.list[0]?.wind?.speed*2.237)}`} //Conver m/s to mph
            soilTemp={`${Math.floor(weather?.list[0]?.main?.temp_max - 273 - (Math.random() * ((5 - 1) + 1)))}`}
            pressure={`${weather?.list[0]?.main?.pressure}`} //Humidity for now
            />
         <section className="thisWeekSection">
             <h3 className="weekTitle">This week's weather</h3>
             {days.map(function(day,index) {
                 return <WeatherButton weather={weather} i={index} key={index} day={day}/>
             })}
         </section>
         </div>     
     )
}

const TodayDate = () => {
    const moment = require('moment');
    const todayTime = moment().format('Do [of] MMMM YYYY');
    return (
        <><h3 className="todayTime">{todayTime}</h3></>
    )
}

const addDays = () => {
    const moment = require('moment');
    const days = [];
    for(var i =1; i<7;i++){
        days.push(moment().add(i,'days').format('ddd'));
    }
    return days
}


export default TodayWeather