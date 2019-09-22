import axios from "axios";
import {FETCH_TRANSACTION} from '../types';

const URL_TRANSACTION = "https://blockchain.info/rawtx";

const normalizeTransactionPayload = (transaction) => ({
    summary: {
      hash: transaction.hash,
      size: transaction.size,
      weight: transaction.weight,
      receivingTime: new Date(
        transaction.time * 1000
      ).toDateString()
    },
    direction: {
      addressesFrom: transaction.inputs.map(input => ({
        address: input.prev_out.addr,
        value: input.prev_out.value
      })),
      addressesTo: transaction.out.map(output => ({
        address: output.addr,
        value: output.value
      }))
    }
});

// asynchronous action creator
export const fetchTransaction = hash => {
  
  return dispatch => {
    
    return axios
      .get(`${URL_TRANSACTION}/${hash}?cors=true`)
      .then(response => {
        dispatch(
          { type: FETCH_TRANSACTION, payload: normalizeTransactionPayload(response.data)}
        );
      })
      .catch(error => {
        throw error;
      });
  };
};
