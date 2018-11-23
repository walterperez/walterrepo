import React, { Component } from 'react';
import {connect} from 'react-redux';
class SideBar extends Component {

    createList(){
      return this.props.ListWebs.ListWebs.map(post=>{
        return (
          <li key={post.name}>{post.name}</li>
        )
      })
    }

    render() {
      return (
        <div className="Side_bar">
          <ul>
            {this.createList()}
          </ul>
        </div>
      );
    }
  }

  function mapStateToProps(state){
    return{
        ListWebs: state.ListWebs
    };
}
  
  export default connect(mapStateToProps)(SideBar);