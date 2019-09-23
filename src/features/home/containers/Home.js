import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Graph from "../presentational/Graph";
import Blocks from "../presentational/Blocks";
import Transactions from "../presentational/Transactions";
import HomeLayout from "../presentational/HomeLayout";
import Loader from "../../ui/Loader";
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

  if (!graph || !lastTransactions || !lastBlocks) return <Loader />;


  return (
    <HomeLayout
      graph={<Graph data={graph} />}
      transactions={<Transactions transactions={lastTransactions} />}
      blocks={<Blocks blocks={lastBlocks} />}
    />
  );
};

export default Home;
