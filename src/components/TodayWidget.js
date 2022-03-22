import SunnyImage from "../sunny.png"
import { FaChevronDown } from "react-icons/fa";


const TodayWidget = ({icon, dayTemp, nightTemp, humidity, wind, soilTemp, pressure}) => {
    return (
        <div className = "todayWidget">
            <rect className="btn"/>
            <TMP maxTmp={dayTemp} minTmp={nightTemp}/>
            <Humidity humidity={humidity}/>
            <Wind wind={wind}/>
            <Soil soilTemp = {soilTemp}/>
            <Pressure pressure={pressure}/>
            <Image />
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
const Image = ({Tmp}) => {
    if (Tmp > 15){
         return (<img src={SunnyImage} height = "84" width = "84" className = "ImageButton"/>)
    }
    else if ((Tmp < 15) && (Tmp > 10)){
        return (<img src={SunnyImage} height = "84" width = "84" className = "ImageButton"/>)
    }
    else {
        return (<img src={SunnyImage} height = "84" width = "84" className = "ImageButton"/>)
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