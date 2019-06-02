import React from 'react';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const Blog4= () => {
    return( 
            <div className="Blog Services" id="Services" >
                <h1 className="Services__title title"> <FontAwesomeIcon icon={faShoppingCart} size='sm'/> Services</h1>
                <hr/>
                <h3 className="Services__subtitle">Web Sites development</h3>
                <img className="Services__img img" src={require("../img/wb (4).jpg")} alt=""></img>
                <p className="Services__img__description">
                    We make professionals websites for your buisness, we use the last and most reliable technologies for building your website, also our prices are adapts depending to your needs, if you only need a small website for starting your buisness, our prices starts at <strong>150£</strong>!
                    Later on, when your business grows we can keep update your website with more features.
                </p>

                <h3 className="Services__subtitle">Brand Design</h3>
                <img className="Services__img img" src={require("../img/illustrator.png")} alt=""></img>
                <p className="Services__img__description">
                    We design very professionals logos for your business, if you dont have an idea yet we can help you, but if what you need is just to create what you have in mind, leave it with us! We use the last technologies in this area to create your logo design!
                </p>

                <h3 className="Services__subtitle">Professional photography</h3>
                <img className="Services__img img" src={require("../img/atardecer2.JPG")} alt=""></img>
                <p className="Services__img__description">
                    Probably, if you are creating your website, you will need to take a few photos of your buisness to upload them later into your website, we have professional equipment for that purpose.
                </p>
                <Footer />
            </div>
    )
}

export default Blog4;