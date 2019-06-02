import React from 'react';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenNib} from '@fortawesome/free-solid-svg-icons';

const Blog6= () => {
    return( 
            <div className="Blog BrandDesigns" id="BrandDesigns" >
                <h1 className="BrandDesigns__title title"><FontAwesomeIcon icon={faPenNib} size='sm'/> Brand Designs</h1>
                <hr/>
                <h3 className="BrandDesigns__subtitle">Photoshop</h3>
                <img className="img BrandDesigns__photo" src={require("../img/photoshop.png")} alt=""></img>
                <p className="BrandDesigns__description">
                    We use professional photo editing tools for improving the visual quality of your business photos, If you need to make your buisness to look perfect, just contact us! 
                </p>

                <hr/>

                <h3 className="BrandDesigns__subtitle">Illustrator</h3>
                <img className="img BrandDesigns__photo" src={require("../img/illustrator.png")} alt=""></img>
                <p className="BrandDesigns__description">
                    We do as well Logo Designs using the best tools for that purpose, Dont think twice, just call us and we will improve your business logo quality 100% guarantee.
                </p>

                <Footer />
            </div>
    )
}

export default Blog6;