import React, { Component } from 'react';
import Blog from '../pages/presentation';
import Blog1 from '../pages/blog1';
import Blog2 from '../pages/blog2';
import Blog3 from '../pages/blog3';
import Blog4 from '../pages/blog4';
import Blog5 from '../pages/blog5';
import Blog6 from '../pages/blog6';
import Blog7 from '../pages/blog7';
import Blog8 from '../pages/blog8';
import {connect} from 'react-redux';

class Posts extends Component {

    render(){
        switch (this.props.activePost.activePost){
            case 'Blog':
                return(
                    <div>
                        <Blog/>
                    </div>
                    )
            case 'Blog1':
                return(
                    <div>
                        <Blog1/>
                    </div>
                    )
            case 'Blog2':
                return(
                    <div>
                        <Blog2/>
                    </div>
                    )
            case 'Blog3':
                return(
                    <div>
                        <Blog3/>
                    </div>
                    )
            case 'Blog4':
                return(
                    <div>
                        <Blog4/>
                    </div>
                    )
            case 'Blog5':
                return(
                    <div>
                        <Blog5/>
                    </div>
                    )
            case 'Blog6':
                return(
                    <div>
                        <Blog6/>
                    </div>
                    )
            case 'Blog7':
                return(
                    <div>
                        <Blog7/>
                    </div>
                    )
            case 'Blog8':
                return(
                    <div>
                        <Blog8/>
                    </div>
                    )

            default:
                return null
                }
    }
    
};


function mapStateToProps(state){
    return{
        activePost: state.activePost
    };
}

export default connect(mapStateToProps)(Posts);