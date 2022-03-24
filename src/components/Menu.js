import {HiOutlineMenu} from "react-icons/hi";
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

//Side Menu components
function Menu() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <HiOutlineMenu onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose className="menu-cross"/>
              </Link>
            </li>
                <li className='nav-text'>
                  <Link to='/'>
                    <span>Forecast</span>
                  </Link>
                </li>
                <li className='nav-text'>
                  <Link to='/suggestion'>
                    <span>Suggestions</span>
                  </Link>
                </li>
          </ul>
        </nav>
    </>
  );
}

export default Menu;