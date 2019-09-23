import React from "react";
import PropTypes from "prop-types";
import Card from "../../ui/Card";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";

const HASHES_TITLE = "Hashes";

const Hashes = ({ hashes: { hash, previousBlock, merkleRoot } }) => (
  <Card title={HASHES_TITLE}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Hash</TableCell>
          <TableCell>{hash}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Previous Block</TableCell>
          <TableCell>{previousBlock}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Merkle</TableCell>
          <TableCell>{merkleRoot}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
);

Hashes.propTypes = {
  hashes: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    previousBlock: PropTypes.string.isRequired,
    merkleRoot: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hashes;
