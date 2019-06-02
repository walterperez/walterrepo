import React from 'react';
import Footer from '../components/footer';

const Blog = () => {

        return (
            <div className="Blog" >
                <div className="Blog_title">
                <img alt="branding" src={require('../img/branding.svg')}></img>
                </div>
                <img src={require("../img/wb (3).jpg")} alt="" className="img"></img>
            <Footer />
            </div>
        )
}

export default Blog;