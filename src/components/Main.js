import React, { Component } from 'react';
import Posts from '../pages/Posts';
class Main extends Component {
    
    render() {
      return (
        <div className="Main">
            <Posts store={this.props.store}/>
        </div>
      );
    }
  }
  
  export default Main;