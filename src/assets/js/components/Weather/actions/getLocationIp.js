import axios from "axios";

export function getLocationIp() {
  const src = "http://ipinfo.io";

  return axios.get(src);
}
