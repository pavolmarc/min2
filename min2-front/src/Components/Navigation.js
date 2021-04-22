import React from 'react'
import './Navigation.css'
import logo from '../Images/logo.png'
import { NavLink} from 'react-router-dom'

function Navigation() {
    return (
      <div className="Navigation">
        <ul class="topnav">
          <NavLink to='/'>
          <img className="logo" src={logo} alt="logo"/>
          </NavLink>
          <NavLink to='/ba' className="normal" activeClassName="activeBa">
          <li>Bratislavský</li>
          </NavLink>
          <NavLink to='/ta' className="normal" activeClassName="activeTa">
          <li>Trnavský</li>
          </NavLink>
          <NavLink to='/tc' className="normal" activeClassName="activeTc">
          <li>Trenčiansky</li>
          </NavLink>
          <NavLink to='/ni' className="normal" activeClassName="activeNi">
          <li>Nitriansky</li>
          </NavLink>
          <NavLink to='/zi' className="normal" activeClassName="activeZi">
          <li>Žilinský</li>
          </NavLink>
          <NavLink to='/bb' className="normal" activeClassName="activeBb">
          <li>Banskobystrický</li>
          </NavLink>
          <NavLink to='/po' className="normal" activeClassName="activePo">
          <li>Prešovský</li>
          </NavLink>
          <NavLink to='/ke' className="normal" activeClassName="activeKe">
          <li>Košický</li>
          </NavLink>
          <NavLink to='/about' className="normal" activeClassName="active">
          <li class="right">About</li>
          </NavLink>
        </ul>
      </div>
    );
  }
  
  export default Navigation;