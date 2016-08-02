import React from "react";

require("./title.less");

export default class Title extends React.Component {
  render() {
    return (
      <span className="weather-title">
        {this.props.data.location.city}, {this.props.data.location.region}
      </span>
    )
  }
}
