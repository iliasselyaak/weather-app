import React from 'react';
import {MdLocationOn} from "react-icons/md";
import { CgEnter } from "react-icons/cg";

//Location Text box
const Location = (props) => {
  const {updateCity, fetchWeather,weather} = props;
  return (
    <div className='search-box'>
      <form id='form' onSubmit={fetchWeather} >
      <input
        type='text'
        className='location'
        placeholder={weather === undefined ? ('Select Location') : (`${weather?.city?.name},${weather?.city?.country}`)}
        onChange = {(e)=> updateCity(e.target.value)}
      />
      <InputButton />
      </form>
      <MdLocationOn className='locationIcon'/>
    </div>
  )
}

//Submit button
const InputButton = () => {
  return (
      <div className = "locTBtn">
      <button type='submit'><CgEnter size={20}/></button>
      </div>
  )
}


export default Location