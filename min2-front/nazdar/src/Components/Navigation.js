import React from 'react'
import './Navigation.css'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
      <div className="Navigation">
        <ul class="topnav">
          <Link to='/about'>
          <img className="logo" src={logo} alt="logo"/>
          </Link>
          <Link to='/ba'>
          <li style={{backgroundColor: "yellow"}}>Bratislavský</li>
          </Link>
          <Link to='/ta'>
          <li style={{backgroundColor: "orange"}}>Trnavský</li>
          </Link>
          <Link to='/tc'>
          <li style={{backgroundColor: "red"}}>Trenčiansky</li>
          </Link>
          <Link to='/ni'>
          <li style={{backgroundColor: "pink"}}>Nitriansky</li>
          </Link>
          <Link to='/zi'>
          <li style={{backgroundColor: "blueviolet"}}>Žilinský</li>
          </Link>
          <Link to='/bb'>
          <li style={{backgroundColor: "blue"}}>Banskobystrický</li>
          </Link>
          <Link to='/po'>
          <li style={{backgroundColor: "darkblue"}}>Prešovský</li>
          </Link>
          <Link to='/ke'>
          <li style={{backgroundColor: "green"}}>Košický</li>
          </Link>
          <Link to='/about'>
          <li class="right">About</li>
          </Link>
        </ul>
      </div>
    );
  }
  
  export default Navigation;