import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HourlyForecast from "./HourlyForecast";
import Sunny from "./../Images/SunnyTodayWidget.png";
import Snowy from "./../Images/SnowTodayWidget.PNG";
import Rainy from "./../Images/RainyTodayWidget.PNG";
import Cloudy from "./../Images/CloudyTodayWidget.png";
import ThunderStorm from "./../Images/ThunderstormTodayWidget.png";
import Mist from "./../Images/MistTodayWidget.PNG";

//TodayWidget components
const TodayWidget = ({description, dayTemp, nightTemp, humidity, wind, soilTemp, pressure}) => {
    return (
        <div className = "todayWidget">
            <rect className="btn"/>
            <TMP maxTmp={dayTemp} minTmp={nightTemp}/>
            <Humidity humidity={humidity}/>
            <Wind wind={wind}/>
            <Soil soilTemp = {soilTemp}/>
            <Pressure pressure={pressure}/>
            <Image description={description}/>
            <Line />
            <TriangleButton/>
        </div>     
    )
}

//Returns max and minimum temperature
const TMP = ({maxTmp, minTmp}) => {
    return (
        <div className="Tmp">
            <h2 >{maxTmp}</h2>
            <h2 >{minTmp}</h2>
        </div>
   )
}

//Returns humidity
const Humidity = ({humidity}) => {
    return (
        <div className="RainT">
            <h3>Humidity(%)</h3>
            <h2>{humidity}</h2>
        </div>
   )
}

//Returns wind speed
const Wind = ({wind}) => {
    return (
        <div className="WindT">
            <h3>Wind(mph)</h3>
            <h2>{wind}</h2>
        </div> 
   )
}

//Returns soil temperature (Note: Soil temperature wasn't obtainable by a free api so its randomly returned.)
const Soil = ({soilTemp}) => {
    return (
        <div className="SoilT">
            <h3 >Soil Temp(°C)</h3>
            <h2 >{soilTemp}</h2>
        </div> 
   )
}

//Returns Pressure
const Pressure = ({pressure}) => {
    return (
        <div className="MoistT">
            <h3 >Pressure(hPa)</h3>
            <h2 >{pressure}</h2>
        </div> 
   )
}

//Return weather icon
const Image = ({description}) => {
    if (description === "Thunderstorm"){
        return (<img src={ThunderStorm} height = "84" width = "84" className = "ImageButton"/>)   
    }
    else if (description === "Drizzle" || description === "Rain"){
        return (<img src={Rainy} height = "84" width = "84" className = "ImageButton"/>)
    } 
    else if (description === "Snow"){
        return (<img src={Snowy} height = "84" width = "84" className = "ImageButton"/>)
    }
    else if (description === "Mist" || description === "Smoke" || description === "Dust" || description === "Fog" || description === "Ash" || description === "Squall" || description === "Tornado"){
        return (<img src={Mist} height = "84" width = "84" className = "ImageButton"/>)
    } 
    else if (description === "Clear"){
        return (<img src={Sunny} height = "84" width = "84" className = "ImageButton"/>)
    }
    else if (description === "Clouds"){
        return (<img src={Cloudy} height = "84" width = "84" className = "ImageButton"/>)
    }
    else{
        return (<></>)
    }
}

//Line for styling
const Line = () => {
return (
    <div>
        <h3 className = "Line"></h3>
        <hr className = "LineH"></hr>
    </div>
)
}

//Return down arrow
const TriangleButton = () => {
    return (
        <div className="TBtn">
        <Link to="/hourlyforecast">
            <FaChevronDown/>
        </Link>
        </div>
    )

}

export default TodayWidget