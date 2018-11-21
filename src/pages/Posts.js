import React, { Component } from 'react';
import Blog from './presentation';
import Blog1 from './blog1';

class Posts extends Component {

    render(){
        switch (this.props.store.getState()){
            case 'Blog':
                return(
                    <div>
                         {this.props.store.getState()}
                        <Blog/>
                    </div>
                    )
            case 'Blog1':
                return(
                    <div>
                        {this.props.store.getState()}
                        <Blog1/>
                    </div>
                    )

            default:
                return null
                }
    }
    
};

export default Posts;