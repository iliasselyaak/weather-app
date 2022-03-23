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


const HourlyForecast = () => {
const day="19th of February 2022"
const Description = "Clouds"
  
  return (
    <div>
        <Return/>
        <Heading day={day}/>
        <rect className="hourlyRect"/>
        <Titles />
        <HourWeather description = {Description}/>
        <HourWeather description = {Description}/>
        <HourWeather description = {Description}/>
        <HourWeather description = {Description}/>
        <HourWeather description = {Description}/>
        <HourWeather description = {Description}/>
    </div>
    )
}

const Heading = ({day}) => {
    return(
    <>
    <img src={logo} height="38" width="36" className="logo-hourly"/>
    <h1 className='hourly-title'>Hourly Forecast</h1>
    <h3 className='hourly-date'>{day}</h3>
    </>
    )
}

const Titles = () => {
  return(
    <div className = "hourlyTitles" >
        <span>
        <h2>Temp</h2>
        <h2>Humidity</h2>
        <h2>Pressure</h2>
        </span>
    </div>
  )
}

const Icon = ({description}) => {
      if (description === "Thunderstorm"){
        return (<img src={ThunderStorm} height = "21" width = "21" className = "hourlyImageWidget"/>)   
      }
      else if (description === "Drizzle" || description === "Rain"){
          return (<img src={Rainy} height = "21" width = "21" className = "hourlyImageWidget"/>)
      } 
      else if (description === "Snow"){
          return (<img src={Snowy} height = "21" width = "21" className = "hourlyImageWidget"/>)
      }
      else if (description === "Mist" || description === "Smoke" || description === "Dust" || description === "Fog" || description === "Ash" || description === "Squall" || description === "Tornado"){
          return (<img src={Mist} height = "21" width = "21" className = "hourlyImageWidget"/>)
      } 
      else if (description === "Clear"){
          return (<img src={Sunny} height = "21" width = "21" className = "hourlyImageWidget"/>)
      }
      else if (description === "Clouds"){
          return (<img src={Cloudy} height = "21" width = "21" className = "hourlyImageWidget"/>)
      }
      else{
          return (<></>)
      }

}

const Values = () => {
  return(
    <div className = "hourlyValues" >
        <span>
        <h2>50</h2>
        <h2>30</h2>
        <h2>100</h2>
        </span>
    </div>
  )
}

const Time = () => {
  return (
    <h2 className="CurrentTimeWidget"> 11PM</h2>
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

const HourWeather = ({description}) => {
  return(
    <div className='hourWeather'>
      <Values />
      <Time />
      <Icon description = {description}/>
    </div>
    )
}


export default HourlyForecast