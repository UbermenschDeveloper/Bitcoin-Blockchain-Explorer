import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import BlocksLayout from "./BlocksLayout";
import { fetchBlocks } from "../../actions/blocks";

const useBlocks = () => {
  const dispatch = useDispatch();
  const blocks = useSelector(state => state.blocks);

  useEffect(() => {
    dispatch(fetchBlocks());
  }, [dispatch]);

  return blocks;
};

const Blocks = ({ history }) => {
  const blocks = useBlocks();

  const handleBlockClick = ({ hash }) => {
    history.push(`block/${hash}`);
  };

  return <BlocksLayout blocks={blocks} onBlockClick={handleBlockClick} />;
};

export default withRouter(Blocks);
