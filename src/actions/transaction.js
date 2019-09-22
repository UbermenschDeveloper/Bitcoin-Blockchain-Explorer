import axios from "axios";
import sb from "satoshi-bitcoin";
import { applyCORSToUrl } from "../utils";
import { FETCH_TRANSACTION } from "../constants/types";
import { URL_TRANSACTION } from "../constants/api";

const normalizeTransactionPayload = transaction => ({
  summary: {
    hash: transaction.hash,
    size: transaction.size,
    weight: transaction.weight,
    receivingTime: new Date(transaction.time * 1000).toDateString()
  },
  direction: {
    addressesFrom: transaction.inputs.map(input => ({
      address: (input.prev_out && input.prev_out.addr) || "No specified"
    })),
    addressesTo: transaction.out.map(output => ({
      address: output.addr || "No specified",
      value: `${sb.toBitcoin(output.value)} BTC`
    }))
  }
});

export const fetchTransaction = hash => {
  return dispatch => {
    const url = applyCORSToUrl(`${URL_TRANSACTION}/${hash}`);
    return axios
      .get(url)
      .then(response => {
        dispatch({
          type: FETCH_TRANSACTION,
          payload: normalizeTransactionPayload(response.data)
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
