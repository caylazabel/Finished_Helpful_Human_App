/**
* Shade Color
* color = color hex
* percent = amount to increase or decrease
*
* https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors#13542669
*/
  function shadeColor(color, percent) {
      var num = parseInt(color, 16),
      amt  = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = (num >> 8 & 0x00FF) + amt,
      B = (num & 0x0000FF) + amt;
      return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
  }


  /**
  * Get Color Shades
  * sourceColor = color hex
  * shades = number of lighter AND darker shades from source color
  * skipSourceColor = true if source color should not be included in results
  * shift = amount of difference between shades, 5 provides a default good range
  */
  function getColorShades(sourceColor, shades, skipSourceColor, shift) {
    var colorsArr = [];
    // default shade shift to 5
    if (typeof shift === 'undefined' || typeof shift !== 'number')
      shift = 5;

    for (var i = -(shades * shift); i <= (shades * shift); i += shift) {

      // skip color source to only get shades darker and lighter
      if (skipSourceColor && i == 0) continue;

      var shadedColor = shadeColor(sourceColor, -i);
      colorsArr.push(shadedColor);
    }
    return colorsArr;
  }


  var colorObjectsList = []; // global


  /**
  * Map Colors to Object
  */
  function mapColorsToObject(colorCodes, groupCode) {
    for (var i = 0; i < colorCodes.length; i++) {
      colorObjectsList.push({"hex": colorCodes[i], "colorGroup": groupCode});
    }
  }

  mapColorsToObject(getColorShades("ff0000", 10), "red"); // red
  mapColorsToObject(getColorShades("00ff00", 10), "green"); // green
  mapColorsToObject(getColorShades("0000ff", 10), "blue"); // blue
  mapColorsToObject(getColorShades("f98006", 10, false, 4), "orange"); // orange, (shifting by 5 got to close to yellow)
  mapColorsToObject(getColorShades("ffff00", 10), "yellow"); // yellow
  mapColorsToObject(getColorShades("6600cc", 10), "purple"); // purple
  mapColorsToObject(getColorShades("996633", 10), "brown"); // brown
  mapColorsToObject(getColorShades("888888", 10, false, 4), "grey"); // grey (shifting by 5 resulted in black and white)


  // shuffle the colors
  colorObjectsList.sort(function() {
    return .5 - Math.random();
  });


  document.write(JSON.stringify(colorObjectsList));
