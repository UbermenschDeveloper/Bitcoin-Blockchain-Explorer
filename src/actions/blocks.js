import axios from "axios";
import { applyCORSToUrl } from "../utils";
import { FETCH_BLOCKS } from "../constants/types";
import { URL_BLOCKS } from '../constants/api';

const normalizeBlocks = ({ blocks }) =>
  blocks.map(({ height, time, hash }) => ({
    height,
    time,
    hash
  }));

export const fetchBlocks = (timestamp = new Date().getTime()) => {
  return dispatch => {
    const url = applyCORSToUrl(`${URL_BLOCKS}/${timestamp}`);
    return axios
      .get(url)
      .then(({data}) => {
        dispatch({
          type: FETCH_BLOCKS,
          payload: normalizeBlocks(data)
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
