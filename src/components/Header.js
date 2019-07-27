import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class Header extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">Streamy</Link>
        <div className="right menu">
          <Link to="/" className="item">All streams</Link>
          <Link to="/" className="item"><GoogleAuth /></Link>
        </div>
      </div>
    )
  }
};


export default Header;
