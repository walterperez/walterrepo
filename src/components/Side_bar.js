import React, { Component } from 'react';
import {connect} from 'react-redux';
//font awesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEnvelope, faHandPointRight, faInfoCircle,faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// library.add(faEnvelope, faHandPointRight, faInfoCircle,faCoffee);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandPointRight,faInfoCircle} from '@fortawesome/free-solid-svg-icons';

 

const mapDispatchToProps = (dispatch) => {
  return {
    changePost: (name) => {
      dispatch({ type: 'CLICK_POST', name: name })
    }
  }
};

function mapStateToProps(state) {
return {
  ListWebs: state.ListWebs,
  Hamburguer: state.Hamburguer
};
}


class SideBar extends Component {

  changeActualPage(name) {
    this.props.changePost(name)
  }

  createList() {
    return this.props.ListWebs.ListWebs.map(post => {
      return (
        <li  key={post.name} onClick={() => { this.changeActualPage(post.name) }}>
        <FontAwesomeIcon icon={post.icon} 
        size="sm"/>
        {post.postName}</li>
      )
    })
  }

  render() {
    if (this.props.Hamburguer.Hamburguer === true) {
      return (
        <div className="Side_bar">
          <ul>
            {this.createList()}
          </ul>
        </div>
      )
    } else {
      return null;
    }
  };
}




export default connect(mapStateToProps, mapDispatchToProps)(SideBar);