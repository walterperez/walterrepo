import React from 'react';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';

const Blog5= () => {
    return( 
            <div className="Blog Photos" id="Photos" >
                <h1 className="Photos__title title"><FontAwesomeIcon icon={faCamera} size='sm'/> Photos</h1>
                <hr/>
                <h3 className="Photos__subtitle subtitle">London</h3>
                <img src={require("../img/atardecer2.JPG")} alt="" className="img Photos__item"></img>
                <img src={require("../img/paisaje original.JPG")} alt="" className="img Photos__item"></img>
                <img src={require("../img/ft (1).jpg")} alt="" className="img Photos__item"></img>
                <img src={require("../img/ft (4).jpg")} alt="" className="img Photos__item"></img>
                <img src={require("../img/fts (1).jpg")} alt="" className="img Photos__item"></img>   
                <img src={require("../img/fts (2).jpg")} alt="" className="img Photos__item"></img>
                <img src={require("../img/fts (3).jpg")} alt="" className="img Photos__item"></img>       
                <img src={require("../img/fts (4).jpg")} alt="" className="img Photos__item"></img>
       
            <Footer />
            </div>
    )
}

export default Blog5;