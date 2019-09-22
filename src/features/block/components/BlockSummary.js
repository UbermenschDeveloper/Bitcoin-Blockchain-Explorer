import React from "react";
import Card from "../../ui/Card";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";

const SUMMARY_TITLE = "Summary";

const BlockSummary = ({
  summary: {
    transactionsCount,
    bits,
    size,
    fee,
    time,
    height,
    receivedTime,
    relayedBy,
  }
}) => (
  <Card title={SUMMARY_TITLE}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Transactions count</TableCell>
          <TableCell>{transactionsCount}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Transaction Fees</TableCell>
          <TableCell>{fee}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Height</TableCell>
          <TableCell>{height}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Timestamp</TableCell>
          <TableCell>{time}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Received Time</TableCell>
          <TableCell>{receivedTime}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Relayed By</TableCell>
          <TableCell>{relayedBy}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bits</TableCell>
          <TableCell>{bits}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Size</TableCell>
          <TableCell>{size}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
);

export default BlockSummary;
