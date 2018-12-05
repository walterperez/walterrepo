import React, { Component } from 'react';
import Hamburguer from './Hamburguer';


class Header extends Component {
    render() {
      return (
        <div className="Header">
            <Hamburguer />
            <div className="Header__Logo"> {'<{'}Walter.Repo{'}>'}</div>
        </div>
      );
    }
  }
  
  export default Header;