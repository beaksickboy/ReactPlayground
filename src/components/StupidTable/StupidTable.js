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
  Paper,
  TableSortLabel
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

const reducer = (accumulator, column) => {
  if (column.sort) {
    accumulator[column.sort.param] = {
      direction: column.sort.direction,
      key: column.key
    };
  }
  return accumulator;
};

const sort = sortingParams => (a, b) => {
  try { 
    
  } catch(e) {
    return 0;
  }
};

const StupidTable = props => {
  const { settings, data } = props;
  const { columns, paging } = settings;
  const classes = useStyles();
  const [page, setPage] = useState(paging.page);
  const [rowsPerPage, setRowsPerPage] = useState(paging.rowsPerPage);
  const [sortingOption, setSortingOption] = useState(
    columns.reduce(reducer, {})
  );

  console.log(sortingOption);

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
    const onClick = sortParam => event => {
      const sortingOptionClone = {
        ...sortingOption
      };
      // If desc then change to ascc
      sortingOptionClone[sortParam] = {
        ...sortingOptionClone[sortParam],
        direction: sortingOptionClone[sortParam].direction === "desc" ? "asc" : "desc"
      };
      setSortingOption(sortingOptionClone);
    };

    const renderSortLabel = column => {
      if (column.sort) {
        return (
          <TableSortLabel
            active={true}
            direction={sortingOption[column.sort.param].direction}
            onClick={onClick(column.sort.param)}
          >
            {column.title}
          </TableSortLabel>
        );
      } else {
        return column.title;
      }
    };

    return (
      <TableRow>
        {columns.map(column => (
          <TableCell align={column.align || "center"} key={column.title}>
            {renderSortLabel(column)}
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
