import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import BlocksLayout from "./BlocksLayout";
import { BLOCKS_MOCK } from "../mocks/mocks";

const useBlocks = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    setBlocks([...BLOCKS_MOCK]);
  }, []);

  return blocks;
};

const Blocks = ({ history }) => {
  const blocks = useBlocks();

  const handleBlockClick = () => {
    history.push("block");
  };

  return <BlocksLayout blocks={blocks} onBlockClick={handleBlockClick} />;
};

export default withRouter(Blocks);
