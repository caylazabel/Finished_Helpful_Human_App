import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import {browserHistory} from 'react-router';
import hamburger from '../../hamburger.svg';
import '../../App.css';

export default class Page extends Component {

    constructor(props) {
      super(props);
      this.handleSidebarClick = this.handleSidebarClick.bind(this);
      this.handleRandomColorClick = this.handleRandomColorClick.bind(this);
      this.handleHomeClick = this.handleHomeClick.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
    }


    handleSidebarClick(group) {
      var path = "http://localhost:3000/api/list/colorGroup/" + group + "/1";
      axios.get(path)
      .then((result) => {
        window.location.reload();
      }).catch(function (error) {
        console.log(error);
      });
    }

    handleRandomColorClick() {
      var path = "http://localhost:3000/api/list/random";
      axios.get(path)
      .then((result) => {
        browserHistory.push('detail?color=' + result.data.hex);
        window.location.reload();
      }).catch(function (error) {
        console.log(error);
      });
    }

    handleHomeClick() {
      browserHistory.push('/');
      window.location.reload();
    }

    handleSearch(query) {
      var path = "http://localhost:3000/api/list/search/" + query + "/1";
      axios.get(path)
      .then((result) => {
        window.location.reload();
      }).catch(function (error) {
        console.log(error);
      });
    }

  render() {
    return (
      <div className="App">
        <Header handleHomeClick={this.handleHomeClick} handleSearch={this.handleSearch} />
        <main>
          <div className="container-fluid">
          <div id="sidecolumn-trigger"><img src={hamburger} alt="menu" /></div>
            <div className="row">

              <Sidebar handleClick={this.handleSidebarClick} handleRandomColorClick={this.handleRandomColorClick} />

              <div className="col-xs-12 col-sm-8">
                <div id="content-wrapper">
                {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
