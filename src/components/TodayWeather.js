import WeatherButton from "./WeatherWidget";
import TodayWidget from "./TodayWidget";
import PropTypes from "prop-types";
import logo from "../logo.png";

const Button = ({color, text, onClick}) => {
    const todayTime = "19th of February 2022"
    return (
        <div>
        <img src={logo} height="38" width="36" className="logo"/>
        <h3 className="tW">Today's Weather</h3>
        <TodayDate todayTime={todayTime}/>
        <TodayWidget />
        <section className="thisWeekSection">
            <h3 className="weekTitle">This week's weather</h3>   
            <WeatherButton/>
            <WeatherButton/>
            <WeatherButton/>
            <WeatherButton/>
            <WeatherButton/>
            <WeatherButton/>
        </section>
        </div>     
    )
}

//Add a library to get today's time ddth of MM YY
const TodayDate = ({todayTime}) => {
    return (
        <><h3 className="todayTime">{todayTime}</h3></>
    )
}

export default Button