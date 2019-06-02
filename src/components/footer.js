import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';

const Footer = function () {
    return(
        <div className="Footer">
            <hr/>
            <p className="copyright"> This site is powered by <FontAwesomeIcon icon={faReact}/> and a lot of <FontAwesomeIcon icon={faCoffee}/>.  </p>
            <p className="copyright"> Copyright &copy; 2018 WalterRepo .</p>
        </div>
    )
}

export default Footer;