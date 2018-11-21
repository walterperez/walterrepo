import React, { Component } from 'react';

class SideBar extends Component {

    render() {
      return (
        <div className="Side_bar">
          <button onClick={()=>{this.props.action("Blog")}}>Post 1</button>
          <button onClick={()=>{this.props.action("Blog2")}}>Post 2</button>

        </div>
      );
    }
  }
  
  export default SideBar;