import React, { Component } from 'react';
import Blog from './presentation';
import Blog1 from './blog1';
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