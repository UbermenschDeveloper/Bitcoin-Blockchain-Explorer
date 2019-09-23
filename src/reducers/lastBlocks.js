import { FETCH_LAST_BLOCKS } from "../constants/types";

const lastBlocks = (state = [], {type, payload}) => {
  switch (type) {
    case FETCH_LAST_BLOCKS:
      return [...state, ...payload,];
    default:
      return state;
  }
};

export default lastBlocks;
