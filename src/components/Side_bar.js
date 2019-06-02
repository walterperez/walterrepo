import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandPointRight,faInfoCircle,faFileAlt,faWrench,faShoppingCart,faCameraRetro,faPenNib,faAt,faBalanceScale} from '@fortawesome/free-solid-svg-icons';

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
  Hamburguer: state.Hamburguer,
  activePost: state.activePost
};
}


class SideBar extends Component {

  changeActualPage(name) {
    this.props.changePost(name)
  }

  importIcon(iconName) {
    switch (iconName){
    case  'faHandPointRight' : {
      return <FontAwesomeIcon icon={faHandPointRight} size='sm'/>
    }
    case  'faFileAlt' : {
      return <FontAwesomeIcon icon={faFileAlt} size='sm'/>
    }
    case  'faInfoCircle' : {
      return <FontAwesomeIcon icon={faInfoCircle} size='sm'/>
    }
    case  'faWrench' : {
      return <FontAwesomeIcon icon={faWrench} size='sm'/>
    }
    case  'faShoppingCart' : {
      return <FontAwesomeIcon icon={faShoppingCart} size='sm'/>
    }
    case  'faCameraRetro' : {
      return <FontAwesomeIcon icon={faCameraRetro} size='sm'/>
    }
    case  'faPenNib' : {
      return <FontAwesomeIcon icon={faPenNib} size='sm'/>
    }
    case  'faAt' : {
      return <FontAwesomeIcon icon={faAt} size='sm'/>
    }
    case  'faBalanceScale' : {
      return <FontAwesomeIcon icon={faBalanceScale} size='sm'/>
    }

    default :
      return (null);
    }
  }

  createList() {
    return this.props.ListWebs.ListWebs.map(post => {
      let icon = this.importIcon(post.icon);
      return (
        this.props.activePost.activePost === post.name ?          
        <li key={post.name} className={'clicked'} onClick={() => { this.changeActualPage(post.name) }}>
          {icon}
          {post.postName}
        </li>
        :
        <li key={post.name} onClick={() => { this.changeActualPage(post.name) }}>
          {icon}
          {post.postName}
        </li>
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