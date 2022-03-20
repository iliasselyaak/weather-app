import PropTypes from "prop-types"
import SunnyImage from "../sunny.png"
import { FaChevronDown } from "react-icons/fa";


const TodayWidget = ({icon, dayTemp, nightTemp, rain, wind, soilTemp, moisture}) => {
    return (
        <div className = "todayWidget">
            <rect className="btn"/>
            <TMP maxTmp={dayTemp} minTmp={nightTemp}/>
            <Rain rain={rain}/>
            <Wind wind={wind}/>
            <Soil soilTemp = {soilTemp}/>
            <Moisture moisture={moisture}/>
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
const Rain = ({rain}) => {
    return (
        <div className="RainT">
            <h3>Rain(mm)</h3>
            <h2>{rain}</h2>
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
const Moisture = ({moisture}) => {
    return (
        <div className="MoistT">
            <h3 >Moisture(°C)</h3>
            <h2 >{moisture}</h2>
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