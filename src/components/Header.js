import React, { Component } from 'react';
import Search from './Search';

class Header extends Component {
    render() {
      return (
        <div className="Header">
          <div className="Header__Logo">WalterRepo</div>
          <Search />
        </div>
      );
    }
  }
  
  export default Header;