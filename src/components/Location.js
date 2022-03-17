import React from 'react';
import {MdLocationOn} from "react-icons/md";
import { CgEnter } from "react-icons/cg";
import App from '../App';


const Location = ({location}) => {
  return (
    <div className='search-box'>
      {/* <input className='location' placeholder={location} /> */}
      <input
        type='text'
        className='location'
        placeholder='search...'
        onChange = {(e)=> App.setQuery(e.target.value)}
        value = {App.query}
        onKeyPress = {App.search}
      >
      </input>
      <MdLocationOn className='locationIcon'/>
      <InputButton/>
    </div>
  )
}

const InputButton = () => {
  return (
      <div className = "locTBtn">
      <button type='submit'><CgEnter size={20}/></button>
      </div>
  )
}


export default Location