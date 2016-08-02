const initialState = {
  "search": "22102",
  "prevSearch": "",
  "fetching": true,
  "searching": false,
  "location": {
    "city": "",
    "region": ""
  },
  "item": {
    "forecast": [],
    "condition": {
      "code": "1",
      "text": "",
      "temp": ""
    }
  }
};

const weather = (state=initialState, action) => {
  switch(action.type) {
    case "FETCH_WEATHER_PENDING": {
      return {
        ...state,
        fetching: true
      }
      break;
    }
    case "FETCH_WEATHER_FULFILLED": {
      if (action.payload.data.query.results != null) {
        return {
          ...state,
          ...action.payload.data.query.results.channel,
          fetching: false
        };
      } else {
        alert('Unable to find location. Please try again.');
        return {
          ...state,
          search: state.prevSearch,
          fetching: false
        }
      }

      break;
    }
    case "FETCH_WEATHER_REJECTED": {
      return {
        state
      }
      break;
    }
    case "TOGGLE_SEARCH": {
      return {
        ...state,
        searching: !state.searching
      }
      break;
    }
    case "UPDATE_SEARCH": {
      return {
        ...state,
        prevSearch: state.search,
        search: action.payload
      }
      break;
    }
  }
  return state;
}

export default weather;
