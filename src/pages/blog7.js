import React from 'react';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAt} from '@fortawesome/free-solid-svg-icons';

const Blog7= () => {
    return( 
            <div className="Blog Contact" id="Contact" >
                <h1 className="Contact__title title"><FontAwesomeIcon icon={faAt} size='sm'/> Contact</h1>
                <hr/>
                <p className="Contact__info">Feel free to type me a few lines if you have any question. Any recomendation for improving this site is always welcome. Thanks for visiting! :)</p>
                    <h4 className="Contact__subtitle"> By Email: </h4>
                    <a className="Contact__contactLink" href="mailto:walter_cph96@outlook.com" id="@email">@WalterPrZ</a>
                    <h4 className="Contact__subtitle"> Github: </h4>
                    <a className="Contact__contactLink" href="https://github.com/waltermaniaco" id="@github">@WalterPrZ</a>
                    <h4 className="Contact__subtitle"> CodePen: </h4>
                    <a className="Contact__contactLink" href="https://codepen.io/WalterPrZ/#" id="@codepen">@WalterPrZ</a>

                <Footer />
            </div>
    )
}

export default Blog7;