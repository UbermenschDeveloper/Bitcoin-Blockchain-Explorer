import axios from "axios";
import { applyCORSToUrl, unixToDateString } from "../utils";
import { FETCH_GRAPH } from "../constants/types";
import { URL_GRAPH } from '../constants/api';

const normalizeGraph = ({ values: graph }) =>
  graph.map(item => ({
    usd: item.y,
    date: unixToDateString(item.x),
  }));

export const fetchGraph = () => {
  return dispatch => {
    const url = applyCORSToUrl(`${URL_GRAPH}`);
    return axios
      .get(`${url}&timespan=30days`)
      .then(({data}) => {
        dispatch({ type: FETCH_GRAPH, payload: normalizeGraph(data) });
      })
      .catch(error => {
        throw error;
      });
  };
};
