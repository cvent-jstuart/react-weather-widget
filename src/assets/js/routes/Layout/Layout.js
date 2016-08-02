import React from "react";
import { connect } from "react-redux";

import Weather from "../../components/Weather/Weather";

require("./layout.less");

class Layout extends React.Component {
  render() {

    const { dispatch, state } = this.props;

    return (
      <div className="layout">
        <div className="layout-container">
          <Weather data={state} dispatch={dispatch} />
        </div>
      </div>
    )
  }
}

const connectItems = (state) => {
  return {
    state: state.weather
  }
};

export default connect(connectItems)(Layout);
