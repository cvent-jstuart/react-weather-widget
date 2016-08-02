import axios from "axios";

export function getLocationGeo(latLng, key) {
  const src = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latLng + "&key=" + key;

  return axios.get(src);
}
