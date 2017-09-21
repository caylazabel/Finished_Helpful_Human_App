import React, { Component } from 'react';

import {Link} from 'react-router';


export default class Sidebar extends Component {

  render () {
    return (
      <div className="col-xs-12 col-sm-4 no-left-padder">
      <div id="sidecolumn">
        <div id="color-randomizer">
          <button type="button" onClick={() => this.props.handleRandomColorClick()}>Random Color</button>
        </div>
        <ul>
          <li><Link to={"/?group=red"} onClick={() => this.props.handleClick("red")} >Red</Link></li>
          <li><Link to={"/?group=orange"} onClick={() => this.props.handleClick("orange")} >Orange</Link></li>
          <li><Link to={"/?group=yellow"} onClick={() => this.props.handleClick("yellow")} >Yellow</Link></li>
          <li><Link to={"/?group=green"} onClick={() => this.props.handleClick("green")} >Green</Link></li>
          <li><Link to={"/?group=blue"} onClick={() => this.props.handleClick("blue")} >Blue</Link></li>
          <li><Link to={"/?group=purple"} onClick={() => this.props.handleClick("purple")} >Purple</Link></li>
          <li><Link to={"/?group=brown"} onClick={() => this.props.handleClick("brown")} >Brown</Link></li>
          <li><Link to={"/?group=grey"} onClick={() => this.props.handleClick("grey")} >Gray</Link></li>
        </ul>
      </div>
    </div>

)
}

}
