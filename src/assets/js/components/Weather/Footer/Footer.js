import React from "react";
import Forecast from "./Forecast/Forecast";

require("./footer.less");

export default class Footer extends React.Component {
  render() {
    const forecast = this.props.data.item.forecast;
    return (
      <div className="weather-footer">
        <ul className="forcast-container">
          {forecast.map( (data, i) => {
            return (
              i < 5 ? <Forecast key={Math.random()} day={data.day} date={data.date} low={data.low} high={data.high} /> : null
            )
          })}
        </ul>
      </div>
    )
  }
}
