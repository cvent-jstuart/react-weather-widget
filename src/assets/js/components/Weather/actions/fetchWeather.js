import axios from "axios";

export function fetchWeather(search, cb) {
  const src = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + escape(search) + "%22)&format=json";

  return function(dispatch){
    dispatch({
      type: "FETCH_WEATHER",
      payload: axios.get(src)
    })
  }
}
