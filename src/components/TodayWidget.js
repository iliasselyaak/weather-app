import PropTypes from "prop-types"
import SunnyImage from "../sunny.png"
import { FaChevronDown } from "react-icons/fa";


const TodayWidget = ({icon, dayTemp, nightTemp, rain, wind, soilTemp, moisture}) => {
    const Tmp = 11
    return (
        <div className = "todayWidget">
            <rect className="btn"/>
            <TMP Tmp = {Tmp}/>
            <Rain />
            <Wind />
            <Soil />
            <Moisture />
            <Image Tmp = {Tmp} />
            <Line />
            <TriangleButton/>
        </div>     
    )
}

const TMP = ({Tmp}) => {
    return (
        <div className="Tmp">
            <h2 >{Tmp}°C</h2>
            <h2 >15°C</h2>
        </div>
   )
}
const Rain = () => {
    return (
        <div className="RainT">
            <h3>Rain(%)</h3>
            <h2>99</h2>
        </div>
   )
}
const Wind = () => {
    return (
        <div className="WindT">
            <h3>Wind(mph)</h3>
            <h2>225</h2>
        </div> 
   )
}
const Soil = () => {
    return (
        <div className="SoilT">
            <h3 >Soil Temp(°C)</h3>
            <h2 >55.9</h2>
        </div> 
   )
}
const Moisture = () => {
    return (
        <div className="MoistT">
            <h3 >Moisture(°C)</h3>
            <h2 >20.3</h2>
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