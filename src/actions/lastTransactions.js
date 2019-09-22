import axios from "axios";
import { FETCH_LAST_TRANSACTIONS } from "../types";

const URL_LAST_TRANSACTIONS =
  "https://blockchain.info/unconfirmed-transactions?format=json";

const normalizeLastTransactionsPayload = ({ txs: transactions }) =>
  transactions.map(({ weight, time, hash }) => ({
    weight,
    time,
    hash
  }));

// asynchronous action creator
export const fetchLastTransactions = () => {
  return dispatch => {
    return axios
      .get(`${URL_LAST_TRANSACTIONS}&cors=true`)
      .then(response => {
        dispatch({
          type: FETCH_LAST_TRANSACTIONS,
          payload: normalizeLastTransactionsPayload(response.data)
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
