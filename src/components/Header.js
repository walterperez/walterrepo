import React, { Component } from 'react';
import Search from './Search';
import Hamburguer from './Hamburguer';


class Header extends Component {
    render() {
      return (
        <div className="Header">
          <Hamburguer />
          <div className="Header__Logo">WalterRepo</div>
          <Search />
        </div>
      );
    }
  }
  
  export default Header;