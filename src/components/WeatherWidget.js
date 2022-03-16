import PropTypes from "prop-types";
import SunnyImage from "../sunny.png";
import { FaChevronRight } from "react-icons/fa";

const WidgetButton = ({day,color, text, onClick}) => {
    const Tmp =16
    return (
        <div className = "Widget">
            <rect className="Widgetbar"/>
                <Date Day={day}/>
                <TMP Tmp = {Tmp}/>
                <Rain />
                <Wind />
                <Soil />
                <Moisture />
                <Image />
                <TriangleRButton/> 
        </div>     
    )
}
const Date = ({Day}) => {
    return (
        <h1 className="DateWidget">{Day}</h1>
   )
}
const TMP = ({Tmp}) => {
    return (
        <h2 className="CurrentTmpWidget">{Tmp}°C</h2>
   )
}
const Rain = () => {
    return (
        <div className = "RainTWidget">
        <h3>Rain(%)</h3>
        <h2>4</h2>
        </div>
   )
}
const Wind = () => {
    return (
        <div  className="WindTWidget">
            <h3>Wind</h3> 
            <h2>10</h2>
        </div>
   )
}
const Soil = () => {
    return (
        <div className="SoilTWidget">
            <h3 >Soil Temp</h3>
            <h2 >4.5</h2>
        </div>
   )
}
const Moisture = () => {
    return (
        <div className="MoistTWidget">
            <h3 >Moisture</h3>
            <h2>0.5</h2>
        </div>
   )
}
const Image = () => {
    return (
        <img src={SunnyImage} height = "21" width = "21" className = "SunnyImageWidget"/>
   )
}

const TriangleRButton = () => {
    return (
        <div className = "TBRtn">
            <FaChevronRight />
        </div>
    )
}


export default WidgetButton
