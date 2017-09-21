import React, { Component } from 'react';

export default class ColorSwatchPreview extends Component {
  render () {

    var style = {
      backgroundColor: "#" + this.props.colorCode
    }

    return (
      <div className="preview-swatch">
        <div className="swatch-color" style={style}></div>
        <div className="swatch-label">
          <h1>#{this.props.colorCode}</h1>
        </div>
      </div>
    )
    }
  }
