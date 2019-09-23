import axios from "axios";
import { applyCORSToUrl, unixToDateString } from "../utils";
import { FETCH_BLOCK } from "../constants/types";
import { URL_BLOCK } from "../constants/api";

const normalizeBlock = block => ({
  transactions: block.tx.map(({ weight, time, hash }) => ({
    weight,
    time: unixToDateString(time),
    hash
  })),
  summary: {
    transactionsCount: block.n_tx,
    bits: block.bits,
    size: block.size,
    fee: block.fee,
    time: unixToDateString(block.time),
    height: block.height,
    receivedTime: unixToDateString(block.received_time),
    relayedBy: block.relayed_by
  },
  hashes: {
    hash: block.hash,
    previousBlock: block.prev_block,
    nextBlocks: block.next_block,
    merkleRoot: block.mrkl_root
  }
});

export const fetchBlock = hash => {
  return dispatch => {
    const url = applyCORSToUrl(`${URL_BLOCK}/${hash}`);
    return axios
      .get(url)
      .then(({data}) => {
        dispatch({ type: FETCH_BLOCK, payload: normalizeBlock(data) });
      })
      .catch(error => {
        throw error;
      });
  };
};
