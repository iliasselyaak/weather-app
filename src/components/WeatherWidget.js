import { FaChevronRight } from "react-icons/fa";
import Sunny from "./../Images/SunnyWidget.PNG";
import Snowy from "./../Images/SnowyWidget.PNG";
import Rainy from "./../Images/RainyWidget.PNG";
import Cloudy from "./../Images/CloudyWidget.PNG";
import ThunderStorm from "./../Images/ThunderstormWidget.PNG";
import Mist from "./../Images/MistWidget.png";
import { Link } from 'react-router-dom';

//Widget Components
const WidgetButton = ({weather,i,day}) => {
    const descList = ["Thunderstorm","Rain","Snow","Mist","Clear","Clouds"];
    return (
        <div className = "Widget">
            <rect className="Widgetbar"/>
                <Date day={day}/>
                <TMP weather={weather} i={i}/>
                <Humidity weather={weather} i={i}/>
                <Wind weather={weather} i={i}/>
                <Soil weather={weather} i={i}/>
                <Pressure weather={weather} i={i}/>
                <Image description={(weather.list[i+7*(i+1)] !== undefined) ? `${weather?.list[i+7*(i+1)]?.weather[0]?.main}`: descList[Math.floor(Math.random() * descList.length)]}/>
                <TriangleRButton i={i}/> 
        </div>     
    )
}

//Return Date
const Date = ({day}) => {
    return (
        <h1 className="DateWidget">{day}</h1>
   )
}

//Return temperature
const TMP = ({i,weather}) => {
    return (
        <h2 className="CurrentTmpWidget"> {(weather.list[i+7*(i+1)] !== undefined) ? `${Math.floor(weather?.list[i+7*(i+1)]?.main?.temp_max - 273)}` : Math.floor((Math.random() * (18 - 7) + 7))}°C</h2>
   )
}

//Return humidity
const Humidity = ({i,weather}) => {
    return (
        <div className = "RainTWidget">
        <h3>Humidity</h3>
        <h2>{(weather.list[i+7*(i+1)] !== undefined) ? `${weather?.list[i+7*(i+1)]?.main?.humidity}` : Math.floor((Math.random() * (85- 52) + 52))}</h2>
        </div>
   )
}

//Return wind speed
const Wind = ({i,weather}) => {
    return (
        <div  className="WindTWidget">
            <h3>Wind</h3> 
            <h2>{(weather.list[i+7*(i+1)] !== undefined) ? `${Math.floor(weather?.list[i+7*(i+1)]?.wind?.speed*2.237)}` : Math.floor((Math.random() * (18 - 2) + 2))}</h2>
        </div>
   )
}
//Return soil temperature
const Soil = ({i,weather}) => {
    return (
        <div className="SoilTWidget">
            <h3 >Soil Temp</h3>
            <h2 >{(weather.list[i+7*(i+1)] !== undefined) ? `${Math.floor(weather?.list[i+7*(i+1)]?.main?.temp_max - 273 - (Math.random() * ((5 - 1) + 1)))}`: Math.floor((Math.random() * (22 - 7) + 7) - (Math.random() * ((5 - 1) + 1)))}</h2>
        </div>
   )
}

//Return pressure
const Pressure = ({i,weather}) => {
    return (
        <div className="MoistTWidget">
            <h3 >Pressure</h3>
            <h2>{(weather.list[i+7*(i+1)] !== undefined) ? `${weather?.list[i+7*(i+1)]?.main?.pressure}`: Math.floor((Math.random() * (1050 - 1010) + 1010))}</h2>
        </div>
   )
}

//Return weather icon
const Image = ({description}) => {
    if (description === "Thunderstorm"){
        return (<img src={ThunderStorm} height = "21" width = "21" className = "ImageWidget"/>)   
    }
    else if (description === "Drizzle" || description === "Rain"){
        return (<img src={Rainy} height = "21" width = "21" className = "ImageWidget"/>)
    } 
    else if (description === "Snow"){
        return (<img src={Snowy} height = "21" width = "21" className = "ImageWidget"/>)
    }
    else if (description === "Mist" || description === "Smoke" || description === "Dust" || description === "Fog" || description === "Ash" || description === "Squall" || description === "Tornado"){
        return (<img src={Mist} height = "21" width = "21" className = "ImageWidget"/>)
    } 
    else if (description === "Clear"){
        return (<img src={Sunny} height = "21" width = "21" className = "ImageWidget"/>)
    }
    else if (description === "Clouds"){
        return (<img src={Cloudy} height = "21" width = "21" className = "ImageWidget"/>)
    }
    else{
        return (<></>)
    }
}

//Return right arrow
const TriangleRButton = ({i}) => {
    return (
        <div className = "TBRtn">
            <Link to={`/detailedforecast/${i}`}>
                <FaChevronRight />
            </Link>
        </div>
    )
}


export default WidgetButton
