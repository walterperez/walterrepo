//REACT
import React, { Component } from 'react';
//react components
//import Login from './components/Login';
import Header from './components/Header';
import SideBar from './components/Side_bar';
import Main from './components/Main';
import { connect } from 'react-redux';
//import './Style/bootstrap4/bootstrap.min.css';
import './Style/style.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style2: "'header header header header' 'main main main main'"
    }
  };  

  render() {
    return (
      <div className="App" style={ this.props.Hamburguer.Hamburguer? {} : { gridTemplateAreas: this.state.style2}}>
        <Header />
        <SideBar />
        <Main />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Hamburguer: state.Hamburguer
  };
}

export default connect(mapStateToProps)(App);
