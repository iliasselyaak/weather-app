import SunnyImage from "../sunny.png";
import { FaChevronRight } from "react-icons/fa";

const WidgetButton = ({weather,i,day,color, text, onClick}) => {
    return (
        <div className = "Widget">
            <rect className="Widgetbar"/>
                <Date day={day}/>
                <TMP weather={weather} i={i}/>
                <Humidity weather={weather} i={i}/>
                <Wind weather={weather} i={i}/>
                <Soil weather={weather} i={i}/>
                <Pressure weather={weather} i={i}/>
                <Image />
                <TriangleRButton/> 
        </div>     
    )
}
const Date = ({day}) => {
    return (
        <h1 className="DateWidget">{day}</h1>
   )
}
const TMP = ({i,weather}) => {
    return (
        <h2 className="CurrentTmpWidget"> {(weather.list[i+7*(i+1)] !== undefined) ? `${Math.floor(weather?.list[i+7*(i+1)]?.main?.temp_max - 273)}°C` : '10°C'}</h2>
        //<h2 className="CurrentTmpWidget"> {`${Math.floor(weather?.list[i+7*(i+1)]?.main?.temp_max - 273)}°C`}</h2>
   )
}
const Humidity = ({i,weather}) => {
    return (
        <div className = "RainTWidget">
        <h3>Humidity</h3>
        <h2>{`${weather?.list[i+7*(i+1)]?.main?.humidity}`}</h2>
        </div>
   )
}
const Wind = ({i,weather}) => {
    return (
        <div  className="WindTWidget">
            <h3>Wind</h3> 
            <h2>{`${Math.floor(weather?.list[i+7*(i+1)]?.wind?.speed*2.237)}`}</h2>
        </div>
   )
}
const Soil = ({i,weather}) => {
    return (
        <div className="SoilTWidget">
            <h3 >Soil Temp</h3>
            <h2 >{`${Math.floor(weather?.list[i+7*(i+1)]?.main?.temp_max - 273 - (Math.random() * ((5 - 1) + 1)))}`}</h2>
        </div>
   )
}
const Pressure = ({i,weather}) => {
    return (
        <div className="MoistTWidget">
            <h3 >Pressure</h3>
            <h2>{`${weather?.list[i+7*(i+1)]?.main?.pressure}`}</h2>
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
