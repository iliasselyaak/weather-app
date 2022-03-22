import { FaChevronDown } from "react-icons/fa";
import Sunny from "./../Images/SunnyTodayWidget.png";
import Snowy from "./../Images/SnowTodayWidget.PNG";
import Rainy from "./../Images/RainyTodayWidget.PNG";
import Cloudy from "./../Images/CloudyTodayWidget.png";
import ThunderStorm from "./../Images/ThunderstormTodayWidget.png";
import Mist from "./../Images/MistTodayWidget.PNG";

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

const TMP = ({maxTmp, minTmp}) => {
    return (
        <div className="Tmp">
            <h2 >{maxTmp}</h2>
            <h2 >{minTmp}</h2>
        </div>
   )
}
const Humidity = ({humidity}) => {
    return (
        <div className="RainT">
            <h3>Humidity(%)</h3>
            <h2>{humidity}</h2>
        </div>
   )
}
const Wind = ({wind}) => {
    return (
        <div className="WindT">
            <h3>Wind(mph)</h3>
            <h2>{wind}</h2>
        </div> 
   )
}
const Soil = ({soilTemp}) => {
    return (
        <div className="SoilT">
            <h3 >Soil Temp(°C)</h3>
            <h2 >{soilTemp}</h2>
        </div> 
   )
}
const Pressure = ({pressure}) => {
    return (
        <div className="MoistT">
            <h3 >Pressure(hPa)</h3>
            <h2 >{pressure}</h2>
        </div> 
   )
}
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
const Line = () => {
return (
    <div>
        <h3 className = "Line"></h3>
        <hr className = "LineH"></hr>
    </div>
)
}
const TriangleButton = () => {
    return (
        <div className="TBtn">
            <FaChevronDown />
        </div>
    )

}

export default TodayWidget