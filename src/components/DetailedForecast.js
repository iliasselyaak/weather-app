import React from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from "../logo.png";
import Sunny from "./../Images/SunnyWidget.PNG";
import Snowy from "./../Images/SnowyWidget.PNG";
import Rainy from "./../Images/RainyWidget.PNG";
import Cloudy from "./../Images/CloudyWidget.PNG";
import ThunderStorm from "./../Images/ThunderstormWidget.PNG";
import Mist from "./../Images/MistWidget.png";


const DetailedForecast = () => {
  const day="19th of February 2022"
  const Description = "Clouds"
  return (
    <div> 
      <Return/>
      <Heading day={day}/>
      <rect className="hourlyRect"/>
      <Attributes />
      <Values />
      <Icon description = {Description} />
      <Temperature />
    </div>
 
   )
}

const Heading = ({day}) => {
  return(
  <>
  <img src={logo} height="38" width="36" className="logo-hourly"/>
  <h1 className='hourly-titleD'> Detailed Forecast</h1>
  <h3 className='hourly-date'>{day}</h3>
  </>
  )
}

const Return = () => {
    return(
    <div>
        <Link to="/" className="backArrow" >
        <FaChevronLeft/>
        </Link>
    </div>
    )
}

const Attributes = () => {
  return(
    <div className="attributesDesc">
      <h3>Humidity(%)</h3>
      <h3>Wind(mph)</h3>
      <h3>Soil Temp(°C)</h3>
      <h3>Pressure(hPa)</h3>
      <h3>Cloudiness(%)</h3>
      <h3>Visibility(m)</h3>
    </div>
  )
}

const Icon = ({description}) => {
  if (description === "Thunderstorm"){
    return (<img src={ThunderStorm} height = "21" width = "21" className = "DescImageWidget"/>)   
  }
  else if (description === "Drizzle" || description === "Rain"){
      return (<img src={Rainy} height = "21" width = "21" className = "DescImageWidget"/>)
  } 
  else if (description === "Snow"){
      return (<img src={Snowy} height = "21" width = "21" className = "DescImageWidget"/>)
  }
  else if (description === "Mist" || description === "Smoke" || description === "Dust" || description === "Fog" || description === "Ash" || description === "Squall" || description === "Tornado"){
      return (<img src={Mist} height = "21" width = "21" className = "DescImageWidget"/>)
  } 
  else if (description === "Clear"){
      return (<img src={Sunny} height = "21" width = "21" className = "DescImageWidget"/>)
  }
  else if (description === "Clouds"){
      return (<img src={Cloudy} height = "21" width = "21" className = "DescImageWidget"/>)
  }
  else{
      return (<></>)
  }
}

const Temperature = () => {
  return(
    <div className="descTemperature">
      <h3>13°C</h3>
      <h3>Clear</h3>
    </div>
  )
}


const Values = () => {
  return(
    <div className="valuesDesc">
      <h3>50</h3>
      <h3>20</h3>
      <h3>100</h3>
      <h3>1000</h3>
      <h3>20</h3>
      <h3>5</h3>
    </div>
  )
}

export default DetailedForecast