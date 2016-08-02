import React from "react";

require("./body.less");

export default class Header extends React.Component {
  render() {
    return (
      <div className="weather-body">
        <div className="weather-temp">
          {this.props.data.item.condition.temp}&deg;
        </div>
        <div className="weather-image-container">
          <div className="weather-image"><img src={"http://l.yimg.com/a/i/us/we/52/" + this.props.data.item.condition.code + ".gif"} /></div>
          <div className="weather-description">{this.props.data.item.condition.text}</div>
        </div>
      </div>
    )
  }
}
// alternate image url
// http://l.yimg.com/a/i/us/nws/weather/gr/" + this.props.data.item.condition.code + "d.png
