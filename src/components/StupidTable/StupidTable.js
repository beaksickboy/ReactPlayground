import React, { useState } from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Paper
} from "@material-ui/core";
import PropTypes from "prop-types";

import TablePaginationActions from "./TablePaginationActions";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

const StupidTable = props => {
  const { settings, data } = props;
  const { columns, paging } = settings;
  const classes = useStyles();
  const [page, setPage] = useState(paging.page);
  const [rowsPerPage, setRowsPerPage] = useState(paging.rowsPerPage);

  // Create table row base on data, and setting key
  // If in tableSetting column has properties component then render component instead of key
  const tableRow = () => {
    const start = page * rowsPerPage;
    const end = page * rowsPerPage + rowsPerPage;
    // Loop thorugh each row
    return data
      .slice(start, end)
      .map(row => <TableRow key={row.name}>{createRow(row)}</TableRow>);
  };

  const createRow = row => {
    return columns.map((column, index) => (
      <TableCell align={column.align || "center"} key={index}>
        {column.component
          ? column.component({
              tableData: data,
              rowData: row,
              value: row[column.key]
            })
          : row[column.key]}
      </TableCell>
    ));
  };

  const tableHeader = () => {
    return (
      <TableRow>
        {columns.map(column => (
          <TableCell align={column.align || "center"} key={column.title}>
            {column.title}
          </TableCell>
        ))}
      </TableRow>
    );
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    // Reset Page
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const tableFooter = () => {
    return (
      <TableRow>
        <TablePagination
          rowsPerPageOptions={paging.rowPerPageOptions}
          colSpan={settings.length + 1}
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            native: true
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableRow>
    );
  };

  return (
    <Paper className={classes.root}>
      <Table stickyHeader className={classes.table}>
        <TableHead>{tableHeader()}</TableHead>
        <TableBody>{tableRow()}</TableBody>
        <TableFooter>{tableFooter()}</TableFooter>
      </Table>
    </Paper>
  );
};

StupidTable.propTypes = {
  settings: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

export default StupidTable;
