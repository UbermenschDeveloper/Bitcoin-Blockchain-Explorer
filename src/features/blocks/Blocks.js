import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import BlocksLayout from "./BlocksLayout";
import { BLOCKS_MOCK } from "../mocks/mocks";

const useBlocks = () => {
  const dispatch = useDispatch();
  const blocks = useSelector(state => state.blocks);

  const mockedPayload = [...BLOCKS_MOCK];

  useEffect(() => {
    dispatch({ type: "FETCH_BLOCKS", payload: mockedPayload });
  }, [dispatch, mockedPayload]);

  return blocks;
};

const Blocks = ({ history }) => {
  const blocks = useBlocks();

  const handleBlockClick = ({hash}) => {
    history.push(`block/${hash}`);
  };

  return <BlocksLayout blocks={blocks} onBlockClick={handleBlockClick} />;
};

export default withRouter(Blocks);
