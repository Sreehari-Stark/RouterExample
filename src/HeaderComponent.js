import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function HeaderComponent()
{
    return(
          <ul>
            <li>
              <Link to="/Home"> Home </Link>
            </li>
            <li>
              <Link to="/About"> About </Link>
            </li>
            <li>
              <Link to="/Team"> Team </Link>
            </li>
          </ul>
    )
    
}
export default HeaderComponent;