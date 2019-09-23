import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Graph from "../components/Graph";
import Blocks from "../components/Blocks";
import Transactions from "../components/Transactions";
import HomeLayout from "../components/HomeLayout";
import { fetchGraph } from '../../../actions/graph';
import { fetchLastTransactions } from '../../../actions/lastTransactions';
import { fetchLastBlocks } from '../../../actions/lastBlocks';

const useGraph = () => {
  const dispatch = useDispatch();
  const graph = useSelector(state => state.graph);

  useEffect(() => {
    dispatch(fetchGraph());
  }, [dispatch]);
  
  return graph;
};

const useLastTransactions = () => {
  const dispatch = useDispatch();
  const lastTransactions = useSelector(state => state.lastTransactions);

  useEffect(() => {
    dispatch(fetchLastTransactions());
  }, [dispatch]);

  return lastTransactions;
};

const useLastBlocks = () => {
  const dispatch = useDispatch();
  const lastBlocks = useSelector(state => state.lastBlocks);

  useEffect(() => {
    dispatch(fetchLastBlocks());
  }, [dispatch]);

  return lastBlocks;
};

const Home = () => {
  const graph = useGraph();
  const lastTransactions = useLastTransactions();
  const lastBlocks = useLastBlocks();

  return (
    <HomeLayout
      graph={<Graph data={graph} />}
      transactions={<Transactions transactions={lastTransactions} />}
      blocks={<Blocks blocks={lastBlocks} />}
    />
  );
};

export default Home;
