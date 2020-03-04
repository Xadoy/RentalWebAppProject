import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function ListingsTable({ rows,removeListing }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Items</TableCell>
            <TableCell align="right">Total Owned</TableCell>
            <TableCell align="right">Rented Out</TableCell>
            <TableCell align="right">In Stock</TableCell>
            <TableCell align="right">Due</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.total_num}</TableCell>
              <TableCell align="right">{row.rent_num}</TableCell>
              <TableCell align="right">{row.stock_num}</TableCell>
              <TableCell align="right">{row.due_num}</TableCell>
              <Button
                color="secondary"
                onClick={() => removeListing(row.name)}
              >
                remove
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
