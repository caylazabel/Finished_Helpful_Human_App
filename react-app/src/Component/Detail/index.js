import React, { Component } from 'react';
import ColorSwatch from '../../Component/ColorSwatch';
import ColorSwatchPreview from '../../Component/ColorSwatchPreview';
import {getColorShades} from '../../utils/ColorShades';
import {resetHeight} from '../../utils/Dimensions';
import {Link, browserHistory} from 'react-router';
import axios from 'axios';
import Page from '../../Component/Page';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shades: []
    } 

    this.handleClick = this.handleClick.bind(this);
    this.handleRandomColorClick = this.handleRandomColorClick.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    resetHeight();
    var color = this.props.location.query.color;
    this.setState({
      shades: getColorShades(color, 2, false, 20)
    });
  }

    handleClick(color) {
      this.setState({
        shades: getColorShades(color, 2, false, 20)
      });
    }

    handleRandomColorClick() {
      var path = "http://localhost:3000/api/list/random";
      axios.get(path)
      .then((result) => {
        this.setState({
          shades: getColorShades(result.data.hex, 2, false, 20)
        });
        browserHistory.push('detail?color=' + result.data.hex);
      }).catch(function (error) {
        console.log(error);
      });
    }



  render () {
    return (
              <Page>
                <div>
                  <div className="row">
                    <div className="col-xs-12">
                      <ColorSwatchPreview colorCode={this.props.location.query.color} />
                    </div>
                  </div>

                  <div className="row">

                    {this.state.shades.map((color, i) =>
                      <div className="col-xs-6 col-sm-4 col-md-5ths" key={color}>
                      <Link to={"/detail?color=" + color} onClick={() => this.handleClick(color)}>
                        <ColorSwatch colorCode={color} />
                      </Link>
                      </div>
                    )}

                  </div>

                  <div className="row">
                    <div className="col-xs-12">
                      <div id="clear-button">
                          <Link to={"/"}><button type="button">Clear</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Page>


    )
  }
}
