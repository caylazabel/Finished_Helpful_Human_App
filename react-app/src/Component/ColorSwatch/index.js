import React, { Component } from 'react';

export default class ColorSwatch extends Component {
  render () {

    var style = {
      backgroundColor: "#" + this.props.colorCode
    }

    return (
      <div className="small-preview-swatch1">
        <div className="small-swatch-color1" style={style}></div>
        <div className="small-swatch-label1"><h1>#{this.props.colorCode}</h1></div>
      </div>
    )
    }
  }
