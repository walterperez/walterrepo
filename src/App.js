//REACT
import React, { Component } from 'react';

//react components
//import Login from './components/Login';
import Header from './components/Header';
import SideBar from './components/Side_bar';
import Main from './components/Main';
import './Style/style.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideBar />
        <Main/>
      </div>
    );
  }
}

export default App;
