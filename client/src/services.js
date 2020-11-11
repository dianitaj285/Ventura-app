import axios from "axios";

export function getPrices() {
  return axios.get("/prices");
}
