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

export function ListingsTable({ rows, removeListing }) {
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
              <TableCell align="right">
                {" "}
                <Button
                  color="secondary"
                  onClick={() => removeListing(row.name)}
                >
                  remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function UsersTable({ rows, removeUser }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="right">Last Login</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Created at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.last_login}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.create_at}</TableCell>
              <TableCell align="right">
                {" "}
                <Button color="secondary" onClick={() => removeUser(row.name)}>
                  remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function RequestTable({ rows, approveRequest }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Items</TableCell>
            <TableCell align="right">Last Login</TableCell>
            <TableCell align="right">Request Count</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.request_count}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                {" "}
                <Button
                  color="secondary"
                  onClick={() => approveRequest(row.name)}
                >
                  approve
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
