import React, { Component } from 'react';
import axios from 'axios';
import ColorSwatch from '../../Component/ColorSwatch';
import {Link} from 'react-router';
import Page from '../../Component/Page';
import {resetHeight} from '../../utils/Dimensions';


export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paginationPath: "/?page=",
      pageType: "list",
      colors: [],
      query: "",
      group: "",
      page: 1
    }
  }

  componentDidMount() {
    resetHeight();
    var colorGroup = this.props.location.query.group;
    var search = this.props.location.query.search;
    var page = this.props.location.query.page;

    if (typeof page === "undefined") page = 1;
    var path;
    if (typeof colorGroup !== "undefined") {
      this.setState({
        pageType:"group",
        group: colorGroup,
        page: page
      })
      path = "http://ec2-54-189-248-112.us-west-2.compute.amazonaws.com:3000/api/list/colorGroup/" + colorGroup + "/" + page;
    } else if (typeof search !== "undefined") {
      this.setState({
        pageType: "search",
        query: search,
        page: page
      })
      path = "http://ec2-54-189-248-112.us-west-2.compute.amazonaws.com:3000/api/list/search/" + search + "/" + page;
    } else {
      path = "http://ec2-54-189-248-112.us-west-2.compute.amazonaws.com:3000/api/list/" + page;
      this.setState({
        pageType: "list",
        page: page
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


  render () {
    var pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    return (
      <Page>
      <div>
        <div className="row">

          {this.state.colors.map((color, i) =>
            <div className="col-xs-6 col-md-3" key={color._id}>
              <Link to={"/detail?color=" +color.hex}>
              <ColorSwatch colorCode={color.hex} />
              </Link>
            </div>
          )}

        </div>

        <div id="pagination">
        <div className="row">
        <div className="col-xs-12">
          {this.state.pageType === "list" &&
            <ul>
            {pages.map(function(page, i){
              return <li key={i}><Link to={"/?page=" + page} onClick={() => this.handlePaginationClick(page)}>{page}</Link></li>;
            })}
            </ul>
          }

          {this.state.pageType === "group" &&
            <ul>
            <li><Link to={"/?group=" + this.state.group + "&page=1"} onClick={() => this.handleGroupPaginationClick(1, "group", this.state.group)}>1</Link></li>
            <li><Link to={"/?group=" + this.state.group + "&page=2"} onClick={() => this.handleGroupPaginationClick(2, "group", this.state.group)}>2</Link></li>
            </ul>
          }
          {( (this.state.colors.length === 12 || this.state.page > 1) && this.state.pageType === "search") &&
            <ul>
            <li><Link to={"/?search=" + this.state.query + "&page=1"} onClick={() => this.handleGroupPaginationClick(1, "search", this.state.group)}>1</Link></li>
            <li><Link to={"/?search=" + this.state.query + "&page=2"} onClick={() => this.handleGroupPaginationClick(2, "search", this.state.group)}>2</Link></li>
            </ul>
          }
      </div>
      </div>
      </div>
      </div>
      </Page>
    )
  }
}
