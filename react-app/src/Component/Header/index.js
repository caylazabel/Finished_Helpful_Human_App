import React, { Component } from 'react';
import logo from '../../logo.svg';
import SearchBar from '../../Component/SearchBar';
import {Link} from 'react-router';

export default class Header extends Component {
  render () {
    return (
      <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-6 col-sm-2">
                  <Link to={"/"} onClick={() => this.props.handleHomeClick()}><img src={logo} alt="logo" /></Link>
              </div>
              <SearchBar handleSearch={this.props.handleSearch} />
            </div>
          </div>
      </header>
    )
  }


}
