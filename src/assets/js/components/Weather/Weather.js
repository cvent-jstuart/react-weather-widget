import React from "react";
import { getLocationInitial } from "./actions/getLocationInitial";
import { fetchWeather } from "./actions/fetchWeather";

import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Mask from "./Mask/Mask";

require("./weather.less");

export default class Weather extends React.Component {

  componentWillMount() {
    getLocationInitial()
      .then((resp) => {
        if (resp) { this.props.dispatch(resp) }
      })
      .then(() => {
        this.props.dispatch(fetchWeather(this.props.data.search))
      }).catch(
        (resp) => {
          console.error(resp);
          this.props.dispatch(fetchWeather(this.props.data.search));
        }
      );
  }

  render() {
    return (
      <div className="weather-container">
        <Header data={this.props.data} dispatch={this.props.dispatch} />
        <Body data={this.props.data} />
        <Footer data={this.props.data} />
        <Mask fetching={this.props.data.fetching} />
      </div>
    );
  }
}
