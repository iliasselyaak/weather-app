import React from 'react';
import {MdLocationOn} from "react-icons/md";
import { CgEnter } from "react-icons/cg";


const Location = ({location}) => {
  return (
    <div>
      <form>
      <input className='location' placeholder={location} />
      <MdLocationOn className='locationIcon'/>
      <InputButton/>
      </form>
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