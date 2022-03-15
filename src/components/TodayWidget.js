import PropTypes from "prop-types"
import SunnyImage from "../sunny.png"
import { FaChevronDown } from "react-icons/fa";

const TodayWidget = ({color, text, onClick}) => {
    const Tmp =16
    return (
            <div>
            <div className="btn" />
            <TMP Tmp = {Tmp}/>
            <Rain />
            <Wind />
            <Soil />
            <Moisture />
            <Image Tmp = {Tmp} />
            <Line />
            <TriangleButton />
            </div>
    )
}

const TMP = ({Tmp}) => {
    return (
        <><h3 className="Tmp">{Tmp}°C</h3><h3 className="NTmp">5°C</h3></>
   )
}
const Rain = () => {
    return (
        <><h3 className="RainT">Rain(%)</h3><h3 className="Rain">3</h3></>
   )
}
const Wind = () => {
    return (
        <><h3 className="WindT">Wind(mph)</h3><h3 className="Wind">5</h3></> 
   )
}
const Soil = () => {
    return (
        <><h3 className="SoilT">Soil Temp(°C)</h3><h3 className="Soil">5.9</h3></> 
   )
}
const Moisture = () => {
    return (
        <><h3 className="MoistT">Moisture(°C)</h3><h3 className="Moist">0.3</h3></> 
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
        <div className = "TBtn">
            <FaChevronDown />
        </div>
    )
}


export default TodayWidget