import React from "react";
import Autocomplete from "./Autocomplete/Autocomplete";

require("./search.less");

export default class Search extends React.Component {
  render() {
    return (
      <span className="weather-search">
          <Autocomplete data={this.props.data} dispatch={this.props.dispatch} />
      </span>
    )
  }
}
