import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import Card from "../../ui/Card";

const TransactionDirection = ({
  transactionHash,
  addresses: { addressesFrom, addressesTo }
}) => (
  <Card title={transactionHash}>
    <Divider />
    <Grid container>
      <Grid item xs={12} sm={6}>
        <List component="nav" aria-label="main mailbox folders" dense>
          {addressesFrom.map(address => (
            <ListItem key={address.address}>
              <ListItemText primary={address.address} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Table>
          <TableBody>
            {addressesTo.map(address => (
              <TableRow key={address.address}>
                <TableCell>{address.address}</TableCell>
                <TableCell>{address.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  </Card>
);

export default TransactionDirection;
