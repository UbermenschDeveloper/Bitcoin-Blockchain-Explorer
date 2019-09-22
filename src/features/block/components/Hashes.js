import React from "react";
import Card from "../../ui/Card";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";

const HASHES_TITLE = "Hashes";

const Hashes = ({
  hashes: { hash, previousBlock, merkleRoot }
}) => (
  <Card title={HASHES_TITLE}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            Hash
          </TableCell>
          <TableCell>
            {hash}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Previous Block
          </TableCell>
          <TableCell>
            {previousBlock}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Merkle
          </TableCell>
          <TableCell>
            {merkleRoot}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
);

export default Hashes;
