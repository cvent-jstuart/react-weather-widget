import { fetchWeather } from "../actions/fetchWeather";

export function handleSearch(searching) {

  if (searching == false) {
    return function(dispatch){
      dispatch({
        type: "TOGGLE_SEARCH"
      });
    }
  } else {
    let searchBar = document.getElementsByTagName('input')[0];
    if (searchBar.value != '') {
      return function(dispatch){
        dispatch({
          type: "TOGGLE_SEARCH"
        });
        dispatch({
          type: "UPDATE_SEARCH",
          payload: searchBar.value
        });
        dispatch(fetchWeather(searchBar.value));
      }
    } else {
      return function(dispatch){
        dispatch({
          type: "TOGGLE_SEARCH"
        })
      }
    }
  }
}
