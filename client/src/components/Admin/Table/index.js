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
  Button,
  withStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "#000044"
  }
});

const StyledCell = withStyles(theme => ({
  root: {
    color: "white"
  }
}))(TableCell);


export function ListingsTable({ rows, removeListing }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledCell>Items</StyledCell>
            <StyledCell align="right">Total Owned</StyledCell>
            <StyledCell align="right">Rented Out</StyledCell>
            <StyledCell align="right">In Stock</StyledCell>
            <StyledCell align="right">Due</StyledCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row._id}>
              <StyledCell component="th" scope="row">
                {row.name}
              </StyledCell>
              <StyledCell align="right">{row.totalNum}</StyledCell>
              <StyledCell align="right">{row.rentNum}</StyledCell>
              <StyledCell align="right">{row.stockNum}</StyledCell>
              <StyledCell align="right">{row.dueNum}</StyledCell>
              <StyledCell align="right">
                {" "}
                <Button
                  color="secondary"
                  onClick={() => removeListing(row._id)}
                >
                  remove
                </Button>
              </StyledCell>
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
            <StyledCell>Users</StyledCell>
            <StyledCell align="right">Last Login</StyledCell>
            <StyledCell align="right">Score</StyledCell>
            <StyledCell align="right">Created at</StyledCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <StyledCell component="th" scope="row">
                {row.name}
              </StyledCell>
              <StyledCell align="right">{row.last_login}</StyledCell>
              <StyledCell align="right">{row.score}</StyledCell>
              <StyledCell align="right">{row.create_at}</StyledCell>
              <StyledCell align="right">
                {" "}
                <Button color="secondary" onClick={() => removeUser(row.name)}>
                  remove
                </Button>
              </StyledCell>
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
            <StyledCell>Items</StyledCell>
            <StyledCell align="right">Last Login</StyledCell>
            <StyledCell align="right">Request Count</StyledCell>
            <StyledCell align="right">Price</StyledCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <StyledCell component="th" scope="row">
                {row.name}
              </StyledCell>
              <StyledCell align="right">{row.request_count}</StyledCell>
              <StyledCell align="right">{row.price}</StyledCell>
              <StyledCell align="right">
                {" "}
                <Button
                  color="secondary"
                  onClick={() => approveRequest(row.name)}
                >
                  approve
                </Button>
              </StyledCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}