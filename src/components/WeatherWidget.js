import PropTypes from "prop-types"
import SunnyImage from "../sunny.png"

const WidgetButton = ({color, text, onClick}) => {
    const Tmp = 16
    return (
        <div>
        <div className="Widget" />
            <TMP Tmp = {Tmp}/>
            <Rain />
            <Wind />
            <Soil />
            <Moisture />
            <Image />
            <Date />
        </div>     
    )
}
const Date = () => {
  return(
    <h2 className="DateWidget">Sun</h2>
  )
}

const TMP = ({Tmp}) => {
    return (
        <h3 className="CurrentTmpWidget">{Tmp}°C</h3>
   )
}
const Rain = () => {
    return (
        <><h3 className="RainTWidget">Rain(%)</h3><h3 className="RainWidget">4</h3></>
   )
}
const Wind = () => {
    return (
        <><h3 className="WindTWidget">Wind</h3><h3 className="WindWidget">10</h3></> 
   )
}
const Soil = () => {
    return (
        <><h3 className="SoilTWidget">Soil Temp</h3><h3 className="SoilWidget">4.5</h3></> 
   )
}
const Moisture = () => {
    return (
        <><h3 className="MoistTWidget">Moisture</h3><h3 className="MoistWidget">0.5</h3></> 
   )
}
const Image = () => {
    return (
        <img src={SunnyImage} height = "21" width = "21" className = "SunnyImageWidget"/>
   )
}


export default WidgetButton
