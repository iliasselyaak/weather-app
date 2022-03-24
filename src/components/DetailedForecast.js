import React from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import logo from "../logo.png";
import Sunny from "./../Images/SunnyWidget.PNG";
import Snowy from "./../Images/SnowyWidget.PNG";
import Rainy from "./../Images/RainyWidget.PNG";
import Cloudy from "./../Images/CloudyWidget.PNG";
import ThunderStorm from "./../Images/ThunderstormWidget.PNG";
import Mist from "./../Images/MistWidget.png";

//Detailed Forecast components
const DetailedForecast = ({weather}) => {
  var {i} = useParams();
  const moment = require('moment');
  const day = moment().add('days',parseInt(i)+1).format('Do [of] MMMM YYYY');
  const descList = ["Thunderstorm","Rain","Snow","Mist","Clear","Clouds"];
  const randDesc = descList[Math.floor(Math.random() * descList.length)];
  const Description = (weather.list[parseInt(i)+7*(parseInt(i)+1)] !== undefined) ? `${weather?.list[parseInt(i)+7*(parseInt(i)+1)]?.weather[0]?.main}` : randDesc
  return (
    <div className> 
      <Return/>
      <Heading day={day}/>
      <rect className="hourlyRect"/>
      <Attributes />
      <Values weather={weather} i ={i}/>
      <Icon description = {Description} randDesc={randDesc}/>
      <Temperature weather={weather} i={i} randDesc={randDesc}/>
    </div>
 
   )
}

//Heading with logo, title and date
const Heading = ({day}) => {
  return(
  <>
  <img src={logo} height="38" width="36" className="logo-hourly"/>
  <h1 className='hourly-titleD'> Detailed Forecast</h1>
  <h3 className='hourly-date'>{day}</h3>
  </>
  )
}

//Return arrow
const Return = () => {
    return(
    <div>
        <Link to="/" className="backArrow" >
        <FaChevronLeft/>
        </Link>
    </div>
    )
}

//Weather attributes
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

//Weather icon
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

//Temperature and weather description
const Temperature = (props) => {
  const {weather,i, randDesc} = props;
  return(
    <div className="descTemperature">
      <h3>{(weather.list[parseInt(i)+7*(parseInt(i)+1)] !== undefined) ? `${Math.floor(weather?.list[parseInt(i)+7*(parseInt(i)+1)]?.main?.temp_max - 273)}` : Math.floor((Math.random() * (18 - 7) + 7))}°C</h3>
      <h3>{(weather.list[parseInt(i)+7*(parseInt(i)+1)] !== undefined) ? `${weather?.list[parseInt(i)+7*(parseInt(i)+1)]?.weather[0]?.description}`: randDesc}</h3>
    </div>
  )
}

//Attributes values
const Values = (props) => {
  const {weather,i} = props;
  return(
    <div className="valuesDesc">
      <h3>{(weather.list[parseInt(i)+7*(parseInt(i)+1)] !== undefined) ? `${weather?.list[parseInt(i)+7*(parseInt(i)+1)]?.main?.humidity}`: Math.floor((Math.random() * (85- 52) + 52))}</h3>
      <h3>{(weather.list[parseInt(i)+7*(parseInt(i)+1)] !== undefined) ?`${Math.floor(weather?.list[parseInt(i)+7*(parseInt(i)+1)]?.wind?.speed*2.237)}`: Math.floor((Math.random() * (18 - 2) + 2))}</h3>
      <h3>{(weather.list[parseInt(i)+7*(parseInt(i)+1)] !== undefined) ? `${Math.floor(weather?.list[parseInt(i)+7*(parseInt(i)+1)]?.main?.temp_max - 273 - (Math.random() * ((5 - 1) + 1)))}`: Math.floor((Math.random() * (22 - 7) + 7) - (Math.random() * ((5 - 1) + 1)))}</h3>
      <h3>{(weather.list[parseInt(i)+7*(parseInt(i)+1)] !== undefined) ?`${weather?.list[parseInt(i)+7*(parseInt(i)+1)]?.main?.pressure}`: Math.floor((Math.random() * (1050 - 1010) + 1010))} </h3>
      <h3>{(weather.list[parseInt(i)+7*(parseInt(i)+1)] !== undefined) ?`${weather?.list[parseInt(i)+7*(parseInt(i)+1)]?.clouds?.all}`: Math.floor((Math.random() * (100 - 1) + 1))}</h3>
      <h3>{(weather.list[parseInt(i)+7*(parseInt(i)+1)] !== undefined) ?`${weather?.list[parseInt(i)+7*(parseInt(i)+1)]?.visibility}`: Math.floor((Math.random() * (10000 - 9000) + 9000))}</h3>
    </div>
  )
}

export default DetailedForecast