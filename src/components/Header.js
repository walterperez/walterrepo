import React, { Component } from "react";
import Hamburguer from "./Hamburguer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Hamburguer />
        <div className="Header__Logo">
          <img alt="logo" src={require("../img/logo.svg")} />
        </div>
        <a className="Header__link" href="https://github.com/walterperez">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    );
  }
}

export default Header;
