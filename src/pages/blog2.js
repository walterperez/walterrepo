import React from 'react';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

const Blog2= () => {
    return( 
            <div className="Blog About" id="About">
                <h1 className="About__title title"> <FontAwesomeIcon icon={faInfoCircle} size='sm'/> About me</h1>
                <hr/>
                <img className="About__photo" src={require("../img/wcp.jpg")} alt=""></img>
                <h3 className="About__subtitle">Walter Perez</h3>
                <p className="About__photo__subtitle">
                    I am self taught web developer, I am mainly focused on the front end side, but I can work in server side as well using JavaScript tecnologies. 
                </p>
                <p className="About__photo__description">
                    I started to code when I was cursing physics in the University, but it was actually Python, and only in a scientific enviroment. After that, I kept coding but only using Python, the part I always liked more of developing with python was designing UI, that's the reason why I decides to move later to Front End Web development. 
                </p>
                <Footer />
            </div>
    )
}

export default Blog2;