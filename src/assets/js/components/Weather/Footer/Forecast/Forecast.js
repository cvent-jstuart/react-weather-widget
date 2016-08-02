import React from "react";

require("./forecast.less");

export default class Forecast extends React.Component {
  render() {
    return (
      <li className="forecast-daily" key={this.props.date}>
        <div key={this.props.date + this.props.day} className="forecast-day">
          {this.props.day}
        </div>
        <div key={this.props.day + this.props.low + this.props.high} className="forecast-range">
          {this.props.low}&deg; / {this.props.high}&deg;
        </div>
      </li>
    )
  }
}
