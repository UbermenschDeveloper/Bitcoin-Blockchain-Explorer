import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

/**
 * Following code is taken from https://material-ui.com/ docs
 */

const useStyles = makeStyles({
  cell: {
    maxWidth: 120
  }
});

const Table = ({ headRow, bodyRows, onRowClick }) => {
  const classes = useStyles();

  return (
    <MaterialTable>
      <TableHead>
        <TableRow>
          {headRow.map((name, index) => (
            <TableCell key={index}>{name}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {bodyRows.map((row, index) => (
          <TableRow key={index} onClick={onRowClick}>
            {Object.values(row).map((cell, index) => (
              <TableCell key={index}>
                <Typography noWrap className={classes.cell}>
                  {cell}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </MaterialTable>
  );
};

Table.propTypes = {
  headRow: PropTypes.array.isRequired,
  bodyRows: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRowClick: PropTypes.func,
};

export default Table;
