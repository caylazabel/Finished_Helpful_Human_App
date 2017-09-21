import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Detail from './Component/Detail';
import List from './Component/List';
import ColorSwatch from './Component/ColorSwatch';
import ColorSwatchPreview from './Component/ColorSwatchPreview';
import axios from 'axios';
import {browserHistory} from 'react-router';
import hamburger from './hamburger.svg';

import {resetHeight} from './utils/Dimensions';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      pageType: "list",
      group: "",
      query: ""
    }
    this.handleSidebarClick = this.handleSidebarClick.bind(this);
    this.handleRandomColorClick = this.handleRandomColorClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  componentDidMount() {
    //resetHeight();
    var colorGroup = this.props.location.query.group;
    var search = this.props.location.query.search;
    var page = this.props.location.query.page;

    if (typeof page === "undefined") page = 1;
    var path;
    if (typeof colorGroup !== "undefined") {
      this.setState({
        pageType:"group",
        group: colorGroup
      })
      path = "http://localhost:3000/api/list/colorGroup/" + colorGroup + "/" + page;
    } else if (typeof search !== "undefined") {
      this.setState({
        pageType: "search",
        query: search
      })
      path = "http://localhost:3000/api/list/search/" + search + "/" + page;
    } else {
      path = "http://localhost:3000/api/list/" + page;
      this.setState({
        pageType: "list",
      })
    }
    axios.get(path)
    .then((result) => {
      this.setState({
        colors: result.data
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  handleSidebarClick(group) {
    var path = "http://localhost:3000/api/list/colorGroup/" + group + "/1";
    axios.get(path)
    .then((result) => {
      this.setState({
        colors: result.data,
        pageType: "group",
        group: group
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  handleRandomColorClick() {
    var path = "http://localhost:3000/api/list/random";
    axios.get(path)
    .then((result) => {
      browserHistory.push('detail?color=' + result.data.hex);
    }).catch(function (error) {
      console.log(error);
    });
  }


  handleHomeClick() {
    var path = "http://localhost:3000/api/list/1";
    axios.get(path)
    .then((result) => {
      this.setState({
        colors: result.data,
        pageType: "list"
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  handleSearch(query) {
    var path = "http://localhost:3000/api/list/search/" + query + "/1";
    axios.get(path)
    .then((result) => {
      this.setState({
        colors: result.data,
        pageType: "search",
        query: query
      })
    }).catch(function (error) {
      console.log(error);
    });
  }


  handlePaginationClick(page, type, query) {
    console.log('HERE!');
    var path;
    if (type === "search")
      path = "http://localhost:3000/api/list/search/" + query + "/" + page;
    else if (type === "group")
      path = "http://localhost:3000/api/list/colorGroup/" + query + "/" + page;
    else
      path = "http://localhost:3000/api/list/" + page;


    console.log(page, type, query)
    console.log(path);
    axios.get(path)
    .then((result) => {
      this.setState({
        colors: result.data
      })
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
          <div id="sidecolumn-trigger"><img src={hamburger} /></div>
            <div className="row">

              <Sidebar handleClick={this.handleSidebarClick} handleRandomColorClick={this.handleRandomColorClick} />

              <div className="col-xs-12 col-sm-8">
                <div id="content-wrapper">
                  <List colors={this.state.colors} location={this.props.location} handlePaginationClick={this.handlePaginationClick}
                  pageType={this.state.pageType}
                  group={this.state.group}
                  query={this.state.query} />
                </div>
              </div>
            </div>
          </div>
        </main>


      </div>
    );
  }
}

export default App;
