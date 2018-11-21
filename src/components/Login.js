import React, { Component } from 'react';

/*
Hacer el funcionamineto del loggin
*/
class Login extends Component {
    render() {
      return (
        <div className="Login">
          <h1>Welcome to you Soccial Network</h1>
          <form>
            <label>
              <input type="text" ></input>
              <button type="submit">Login</button>
            </label>
          </form>
        </div>
      );
    }
  }
  
  export default Login;