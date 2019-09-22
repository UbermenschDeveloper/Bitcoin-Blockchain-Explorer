import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Graph from "../components/Graph";
import Blocks from "../components/Blocks";
import Transactions from "../components/Transactions";
import HomeLayout from "../components/HomeLayout";
import { GRAPH_MOCK, BLOCKS_MOCK, TRANSACTIONS_MOCK } from "../../mocks/mocks";

const useGraph = () => {
  const dispatch = useDispatch();
  const graph = useSelector(state => state.graph);

  const mockedPayload = GRAPH_MOCK.map(item => ({
    usd: item.y,
    date: new Date(item.x * 1000).toDateString()
  }));

  useEffect(() => {
    dispatch({ type: "FETCH_GRAPH", payload: mockedPayload });
  }, []);

  return graph;
};

const useLastTransactions = () => {
  const dispatch = useDispatch();
  const lastTransactions = useSelector(state => state.lastTransactions);

  const mockedPayload = TRANSACTIONS_MOCK.map(({ weight, time, hash }) => ({
    weight,
    time,
    hash
  }));

  useEffect(() => {
    dispatch({ type: "FETCH_LAST_TRANSACTIONS", payload: mockedPayload });
  }, []);

  return lastTransactions;
};

const useLastBlocks = () => {
  const dispatch = useDispatch();
  const lastBlocks = useSelector(state => state.lastBlocks);

  const mockedPayload = BLOCKS_MOCK;

  useEffect(() => {
    dispatch({ type: "FETCH_LAST_BLOCKS", payload: mockedPayload });
  }, []);

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
