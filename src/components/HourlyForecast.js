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

//Hourly forecast components
const HourlyForecast = (props) => {
const {weather} = props;
const moment = require('moment');
const day = moment().format('Do [of] MMMM YYYY');
  return (
    <div>
        <Return/>
        <Heading day={day}/>
        <rect className="hourlyRect"/>
        <Titles />
        <HourWeather i={1} weather={weather} />
        <HourWeather i={2} weather={weather} />
        <HourWeather i={3} weather={weather} />
        <HourWeather i={4} weather={weather} />
        <HourWeather i={5} weather={weather} />
        <HourWeather i={6} weather={weather} />
    </div>
    )
}

//Heading with logo, title and date
const Heading = ({day}) => {
    return(
    <>
    <img src={logo} height="38" width="36" className="logo-hourly"/>
    <h1 className='hourly-title'>Hourly Forecast</h1>
    <h3 className='hourly-date'>{day}</h3>
    </>
    )
}

//Attribute Titles
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

//Weather Icons
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
//Attribute Values
const Values = (props) => {
  const {i, weather} = props;
  return(
    <div className = "hourlyValues" >
        <span>
        <h2>{`${Math.floor(weather?.list[i]?.main?.temp_max - 273)}°C`}</h2>
        <h2>{`${weather?.list[i]?.main?.humidity}`}</h2>
        <h2>{`${weather?.list[i]?.main?.pressure}`}</h2>
        </span>
    </div>
  )
}

//Time for each 3 hours(API doesn't include hourly)
const Time = ({i}) => {
  const moment = require('moment');
  const time = moment().add(i*3,'hours').format('hA')
  return (
    <h2 className="CurrentTimeWidget"> {time}</h2>

 )
}

//Return Arrow
const Return = () => {
    return(
    <div>
        <Link to="/" className="backArrow" >
        <FaChevronLeft/>
        </Link>
    </div>
    )
}

//Attributes Values
const HourWeather = (props) => {
  const {weather,i} = props;
  const description = `${weather?.list[i]?.weather[0]?.main}`
  return(
    <div className='hourWeather'>
      <Values i={i} weather={weather}/>
      <Time i={i}/>
      <Icon description = {description}/>
    </div>
    )
}



export default HourlyForecast