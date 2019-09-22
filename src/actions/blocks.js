import axios from "axios";
import { FETCH_BLOCKS } from "../types";

const URL_BLOCKS = "https://blockchain.info/blocks";

const normalizeBlocks = ({ blocks }) =>
  blocks.map(({ height, time, hash }) => ({
    height,
    time,
    hash
  }));

export const fetchBlocks = (timestamp = new Date().getTime()) => {
  return dispatch => {
    return axios
      .get(`${URL_BLOCKS}/${timestamp}?format=json&cors=true`)
      .then(response => {
        dispatch({
          type: FETCH_BLOCKS,
          payload: normalizeBlocks(response.data)
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
