import axios from "axios";
import { applyCORSToUrl, satoshiToBTC, unixToDateString } from "../utils";
import { FETCH_TRANSACTION } from "../constants/types";
import { URL_TRANSACTION } from "../constants/api";

const normalizeTransactionPayload = transaction => ({
  summary: {
    hash: transaction.hash,
    size: transaction.size,
    weight: transaction.weight,
    receivingTime: unixToDateString(transaction.time),
  },
  direction: {
    addressesFrom: transaction.inputs.map(input => ({
      address: (input.prev_out && input.prev_out.addr) || "No specified"
    })),
    addressesTo: transaction.out.map(output => ({
      address: output.addr || "No specified",
      value: satoshiToBTC(output.value),
    }))
  }
});

export const fetchTransaction = hash => {
  return dispatch => {
    const url = applyCORSToUrl(`${URL_TRANSACTION}/${hash}`);
    return axios
      .get(url)
      .then(({data}) => {
        dispatch({
          type: FETCH_TRANSACTION,
          payload: normalizeTransactionPayload(data)
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
