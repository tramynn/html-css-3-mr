import React, { Component } from 'react';
import "./NavBar.css"

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      menu: false
    }
  }

  render() {
    return (
      <div className="NavBar-Container">
        <div className="Logo">DevMtn</div>
        <div>
          <ul className="NavLinks">
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
          </ul>
        </div>
        <img src="https://www.stickpng.com/assets/images/588a64e7d06f6719692a2d11.png" alt="Hamburger Menu" className="Hamburger-Menu Hidden-by-default" />
      </div>
    )
  }
}

export default NavBar;