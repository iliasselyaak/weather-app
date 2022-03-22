import React from 'react';
import Location from './Location';
import logo from "../logo.png";

const Home = (props) => {
    const {updateCity,fetchWeather} = props;
  return (
    <div className='home'>
        <img src={logo} height="38" width="36" className="home-logo"/>
        <section className='home-location'>
        <Location updateCity={updateCity} fetchWeather={fetchWeather}/>
        </section>
    </div>
  )
}

export default Home