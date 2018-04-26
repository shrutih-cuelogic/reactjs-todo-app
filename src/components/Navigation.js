import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {
  render(){
    return(
      <nav>
      <ul>
        <li><NavLink activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink activeClassName="current" to='/about'>About</NavLink></li>
        <li><NavLink activeClassName="current" to='/contact'>Contact</NavLink></li>
        <li><NavLink activeClassName="current" to='/topics'>Topic</NavLink></li>
      </ul>
    </nav>
    );
  }
}

export default Navigation