import React from "react";
import { handleSearch } from "../actions/searchHandler";

import Search from "./Search/Search";
import Title from "./Title/Title";

require("./header.less");

export default class Header extends React.Component {
  render() {
    return (
      <div className="weather-header ellipsis">
        <span className="weather-search-icon">
          <a href="javascript:void(0)" onClick={() => {this.props.dispatch(handleSearch(this.props.data.searching))}}>
            <img src="assets/content/img/search.png" />
          </a>
        </span>
        {(this.props.data.searching)
          ? <Search data={this.props.data} dispatch={this.props.dispatch}/>
          : <Title data={this.props.data} />
        }
      </div>
    )
  }
}
