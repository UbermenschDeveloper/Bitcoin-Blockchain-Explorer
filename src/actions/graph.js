import axios from "axios";
import { applyCORSToUrl } from "../utils";
import { FETCH_GRAPH } from "../constants/types";
import { URL_GRAPH } from '../constants/api';

const normalizeGraph = ({ values: graph }) =>
  graph.map(item => ({
    usd: item.y,
    date: new Date(item.x * 1000).toDateString()
  }));

export const fetchGraph = () => {
  return dispatch => {
    const url = applyCORSToUrl(`${URL_GRAPH}`);
    return axios
      .get(`${url}&timespan=30days`)
      .then(response => {
        dispatch({ type: FETCH_GRAPH, payload: normalizeGraph(response.data) });
      })
      .catch(error => {
        throw error;
      });
  };
};
