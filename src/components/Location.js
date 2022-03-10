import React from 'react';
import {MdLocationOn} from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

const Location = ({location}) => {
  return (
    <div>
      <h3 className='location'>{location}</h3>
      <MdLocationOn className='locationIcon'/>
      <TriangleButton />
    </div>
  )
}

const TriangleButton = () => {
  return (
      <div className = "locTBtn">
      <FaChevronDown />
      </div>
  )
}


export default Location