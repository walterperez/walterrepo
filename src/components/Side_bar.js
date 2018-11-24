import React, { Component } from 'react';
import { connect } from 'react-redux';
import {clickPost} from '../actions/index';

class SideBar extends Component {

  changeActualPage() {
    this.props.changePost()
  }

  createList() {
    return this.props.ListWebs.ListWebs.map(post => {
      return (
        <li key={post.name} onClick={()=>{this.changeActualPage(post.name)}}>{post.name}</li>
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

const mapDispatchToProps = (dispatch) => {
  return {
    changePost: (name)=>{
      dispatch(clickPost(name))
    }
  }
};

function mapStateToProps(state) {
  return {
    ListWebs: state.ListWebs
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);