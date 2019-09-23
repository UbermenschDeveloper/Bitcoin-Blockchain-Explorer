import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider
} from "@material-ui/core";
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

Transaction.propTypes = {
  transactionHash: PropTypes.string.isRequired,
  addresses: PropTypes.shape({
    addressesFrom: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.string
      })
    ).isRequired,
    addressesTo: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.string,
        value: PropTypes.string
      })
    ).isRequired
  })
};

export default TransactionDirection;
