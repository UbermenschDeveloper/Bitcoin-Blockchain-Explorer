import { combineReducers } from 'redux';
import block from './block';
import blocks from './blocks';
import graph from './graph';
import lastBlocks from './lastBlocks';
import lastTransactions from './lastTransactions';
import transaction from './transaction';

export default combineReducers({
  transaction,
  block,
  blocks,
  graph,
  lastBlocks,
  lastTransactions,
});