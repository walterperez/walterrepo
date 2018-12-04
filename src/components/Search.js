import React, { Component } from 'react';
import {wordFinder} from '../helpers/searchEngine';

class Search extends Component {
    constructor(props){
        super();
        this.state={
            search:""
        }
    }
    
    handleSearch(this.state,text){
        wordFinder()
        return
    }


    render() {
      return (
        <div className="Search">
            <form className="form-inline">
                <label>
                    <input className="form-control mr-sm-2" placeholder="Search" name="search"></input>
                    <button className="btn btn-outline-success " onClick={()=>{this.handleSearch()}}>Search</button>
                </label>
            </form>
        </div>
      );
    }
  }
  
  export default Search;
