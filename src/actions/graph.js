import axios from "axios";
import { FETCH_GRAPH } from "../types";

const URL_GRAPH =
  "https://blockchain.info/charts/market-price?format=json&timespan=30days";

const normalizeGraph = ({ values: graph }) =>
  graph.map(item => ({
    usd: item.y,
    date: new Date(item.x * 1000).toDateString()
  }));

export const fetchGraph = () => {
  return dispatch => {
    return axios
      .get(`${URL_GRAPH}&cors=true`)
      .then(response => {
        dispatch({ type: FETCH_GRAPH, payload: normalizeGraph(response.data) });
      })
      .catch(error => {
        throw error;
      });
  };
};
