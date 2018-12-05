import React, { Component } from 'react';
import Posts from './Posts';
class Main extends Component {
    
    render() {
      return (
        <div className="Main">
          <div className="Main__content">
            <Posts store={this.props.store}/>
          </div>
        </div>
      );
    }
  }
  
  export default Main;