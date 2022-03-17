import WeatherButton from "./WeatherWidget";
import TodayWidget from "./TodayWidget";
import PropTypes from "prop-types";
import logo from "../logo.png";

 const TodayWeather = ({icon, dayTemp, nightTemp, rain, wind, soilTemp, moisture}) => {
     const days = addDays();
     return (
         <div>
         <img src={logo} height="38" width="36" className="logo"/>
         <h3 className="tW">Today's Weather</h3>
         <TodayDate/>
         <TodayWidget />
         <section className="thisWeekSection">
             <h3 className="weekTitle">This week's weather</h3>
             {days.map(function(day,index) {
                 return <WeatherButton key={index} day={day}/>
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