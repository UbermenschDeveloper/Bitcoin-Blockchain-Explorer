import React, { useState, useEffect } from "react";
import Graph from "../components/Graph";
import Blocks from "../components/Blocks";
import Transactions from "../components/Transactions";
import HomeLayout from "../components/HomeLayout";
import { GRAPH_MOCK, BLOCKS_MOCK, TRANSACTIONS_MOCK } from "../../mocks/mocks";

const useGraph = () => {
  const [graph, setGraph] = useState([]);

  useEffect(() => {
    setGraph(
      GRAPH_MOCK.map(item => ({
        usd: item.y,
        date: new Date(item.x * 1000).toDateString()
      }))
    );
  }, []);

  return graph;
};

const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(
      TRANSACTIONS_MOCK.map(({ weight, time, hash }) => ({
        weight,
        time,
        hash
      }))
    );
  }, []);

  return transactions;
};

const useBlocks = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    setBlocks(BLOCKS_MOCK);
  }, []);

  return blocks;
};

const Home = () => {
  const graph = useGraph();
  const transactions = useTransactions();
  const blocks = useBlocks();

  return (
    <HomeLayout
      graph={<Graph data={graph} />}
      transactions={<Transactions transactions={transactions} />}
      blocks={<Blocks blocks={blocks} />}
    />
  );
};

export default Home;
