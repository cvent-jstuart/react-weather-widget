import { getLocationGeo } from "./getLocationGeo";
import { getLocationIp } from "./getLocationIp";
import { fetchWeather } from "./fetchWeather";

export function getLocationInitial() {

  return new Promise(function(resolve, reject) {

    let timeout = setTimeout(() => {reject("Geolocation permission request timed out. Loading default location...")}, 15000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(

        (success) => {
          getLocationGeo(success.coords.latitude + "," + success.coords.longitude, "AIzaSyCnrS8ONPMPKSJ-dm86lYSU0sEroZMvnSU")
            .then(
              (resp) => {
                clearTimeout(timeout);
                resolve((dispatch) => {
                  dispatch({
                    type: "UPDATE_SEARCH",
                    payload: resp.data.results[0].address_components[7].short_name
                  });
                });
              }
            ).catch(
              (err) => {
                clearTimeout(timeout);
                reject(err);
              }
            );
        }, (failure) => {

          getLocationIp()
            .then(
              (resp) => {
                console.info("Unable to retrieve Geolocation Data: " + failure.message + ". Loading IP-based location for: " + resp.data.city + ", " + resp.data.region + ", " + resp.data.country);
                clearTimeout(timeout);
                resolve((dispatch) => {
                  dispatch({
                    type: "UPDATE_SEARCH",
                    payload: resp.data.city + ", " + resp.data.region + ", " + resp.data.country
                  });
                })
              }
            ).catch(
              (err) => {
                clearTimeout(timeout);
                reject(err);
              }
            );
        }, {
          timeout: 15000
        }
      );
      } else {
        clearTimeout(timeout);
        reject("Unable to retrieve Geolocation Data: Feature is not available in this browser. Loading default location...");
      }
    }
  )
}
