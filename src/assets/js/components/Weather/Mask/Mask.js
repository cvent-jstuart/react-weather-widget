import React from "react";

require("./mask.less");

export default class Forecast extends React.Component {
  render() {
    return (
      <div className={this.props.fetching ? "loading-mask" : "loading-mask hidden"}></div>
    )
  }
}
