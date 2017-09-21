import React, { Component } from 'react';
import {browserHistory} from 'react-router';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  handleQueryChange (e) {
    this.setState({query: e.target.value});
  }

  submitSearch (e) {
    e.preventDefault();
    browserHistory.push('/?search=' + this.state.query);
    this.props.handleSearch(this.state.query)
  }

  render () {
    return (
      <div className="col-xs-6 col-sm-10">
        <div id="searchbar">
          <form onSubmit={this.submitSearch}>
            <input placeholder="Search" value={this.state.query} onChange={this.handleQueryChange} />
          </form>
        </div>
      </div>

    )
  }


}
