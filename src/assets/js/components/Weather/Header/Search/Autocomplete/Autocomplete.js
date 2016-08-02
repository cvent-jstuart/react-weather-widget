import React, { PropTypes } from 'react';
import { handleSearch } from "../../../actions/searchHandler";
import { handleKeyDown } from "../../../actions/weatherUtilities";

export default class ReactGoogleAutocomplete extends React.Component {
  static propTypes = {
    onPlaceSelected: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.autocomplete = null;
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.refs.input, {
      types: ['(cities)'],
    });

    this.autocomplete.addListener('place_changed', this.onSelected.bind(this));
  }

  onSelected() {
    this.props.dispatch(handleSearch(this.props.data.searching));
    if (this.props.onPlaceSelected) {
      this.props.onPlaceSelected(this.autocomplete.getPlace());
    }
  }

  render() {
    return (
        <input ref="input" autoFocus={this.props.data.searching}  />
    );
  }
}
