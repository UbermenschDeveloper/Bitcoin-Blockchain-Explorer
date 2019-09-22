import axios from "axios";
import { FETCH_LAST_BLOCKS } from "../types";

const URL_LAST_BLOCKS = "https://blockchain.info/blocks";

const normalizeLastBlocks = ({ blocks }) =>
  blocks.slice(0, 10).map(({ height, time, hash }) => ({
    height,
    time,
    hash
  }));

export const fetchLastBlocks = (timestamp = new Date().getTime()) => {
  return dispatch => {
    return axios
      .get(`${URL_LAST_BLOCKS}/${timestamp}?format=json&cors=true`)
      .then(response => {
        dispatch({
          type: FETCH_LAST_BLOCKS,
          payload: normalizeLastBlocks(response.data)
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
