import axios from "axios";
import { applyCORSToUrl } from "../utils";
import { FETCH_LAST_BLOCKS } from "../constants/types";
import { URL_LAST_BLOCKS } from '../constants/api';

const normalizeLastBlocks = ({ blocks }) =>
  blocks.slice(0, 10).map(({ height, time, hash }) => ({
    height,
    time,
    hash
  }));

export const fetchLastBlocks = (timestamp = new Date().getTime()) => {
  return dispatch => {
    const url = applyCORSToUrl(`${URL_LAST_BLOCKS}/${timestamp}`);
    return axios
      .get(url)
      .then(({data}) => {
        dispatch({
          type: FETCH_LAST_BLOCKS,
          payload: normalizeLastBlocks(data)
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
