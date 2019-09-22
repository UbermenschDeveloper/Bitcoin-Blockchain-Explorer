import { FETCH_LAST_BLOCKS } from "../constants/types";

const lastBlocks = (state = [], action) => {
  switch (action.type) {
    case FETCH_LAST_BLOCKS:
      return [...state, ...action.payload,];
    default:
      return state;
  }
};

export default lastBlocks;
