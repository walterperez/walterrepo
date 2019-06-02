import React, { Component } from 'react';
import {connect} from 'react-redux';
import {closeMenu,openMenu} from '../actions/index'

class Hamburguer extends Component {
    
  handleClick(){
    if (this.props.Hamburguer.Hamburguer === true){
      return this.props.closeMenu();
    } else {
      return this.props.showMenu();
    }
  }
  
  render() {
      return (
        <div onClick={()=>{this.handleClick()}} className={this.props.Hamburguer.Hamburguer===true?'Active':'Hamburguer'} >
            <div className="Hamburguer__icon">
              <div className="Hamburguer__icon__line"></div>
              <div className="Hamburguer__icon__line"></div>
              <div className="Hamburguer__icon__line"></div>
            </div>
        </div>
      );
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      closeMenu: ()=>{
        dispatch(closeMenu())
      },

      showMenu: ()=>{
        dispatch(openMenu())
      }
    }
  };

  function mapStateToProps(state){
    return{
        Hamburguer: state.Hamburguer
    };
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(Hamburguer);
