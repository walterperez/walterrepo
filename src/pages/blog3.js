import React from 'react';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop,faWrench,faServer} from '@fortawesome/free-solid-svg-icons';


const Blog3= () => {
    return( 
            <div className="Blog Tools" id="Tools" >
                <h1 className="Tools__title title"> <FontAwesomeIcon icon={faWrench} size='sm'/> Tools</h1>
                <hr/>
                <img src={require("../img/techs.png")} alt="techs" className="img Tools__img"></img>
                
                <div className="Tools__container">
                <div className="Tools__container__item" id="front">
                    <h3 className="Tools__subtitle--front">
                    <FontAwesomeIcon icon={faDesktop} size='sm'/> Front End:</h3>
                    <ul className="Tools__subtitle--front__list">
                        <li className="Tools__subtitle--front__list__item">HTML5</li>
                        <li className="Tools__subtitle--front__list__item">CSS3</li>
                        <li className="Tools__subtitle--front__list__item">JavaScript</li>
                        <li className="Tools__subtitle--front__list__item">SASS</li>
                        <li className="Tools__subtitle--front__list__item">React</li>
                        <li className="Tools__subtitle--front__list__item">Redux</li>
                        <li className="Tools__subtitle--front__list__item">Bem</li>
                        <li className="Tools__subtitle--front__list__item">Bootstrap4</li>
                        <li className="Tools__subtitle--front__list__item">Git & Github</li>
                    </ul>
                </div>

                <div className="Tools__container__item" id="back">
                    <h3 className="Tools__subtitle--back">
                    <FontAwesomeIcon icon={faServer} size='sm'/> Back End:</h3>
                    <ul className="Tools__subtitle--back__list">
                        <li className="Tools__subtitle--back__list__item">Node Js</li>
                        <li className="Tools__subtitle--back__list__item">Express</li>
                        <li className="Tools__subtitle--back__list__item">MongoDB</li>
                        <li className="Tools__subtitle--back__list__item">Handlebars</li>
                        <li className="Tools__subtitle--back__list__item">npm</li>
                        <li className="Tools__subtitle--back__list__item">Firebase</li>
                    </ul>
                </div>
                </div>
                <Footer />
            </div>
    )
}

export default Blog3;