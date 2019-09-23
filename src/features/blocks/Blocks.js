import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import BlocksLayout from "./BlocksLayout";
import Loader from "../ui/Loader";
import { fetchBlocks } from "../../actions/blocks";

const useBlocks = (dispatch) => {
  const blocks = useSelector(state => state.blocks);

  useEffect(() => {
    dispatch(fetchBlocks());
  }, [dispatch]);

  return blocks;
};

const Blocks = ({ history }) => {
  const dispatch = useDispatch();
  const blocks = useBlocks(dispatch);

  const handleBlockClick = ({ hash }) => {
    history.push(`block/${hash}`);
  };

  if (!blocks) return <Loader />;

  return <BlocksLayout blocks={blocks} onBlockClick={handleBlockClick} />;
};

Blocks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
};

export default withRouter(Blocks);
