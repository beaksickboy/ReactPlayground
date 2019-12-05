import React, { useState } from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const data = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const CustomComponent = props => {
  console.log(props);
  return <div>avc</div>;
};

// Setting example
const settings = [
  {
    title: "Dessert (100g serving)",
    key: "name",
    align: "left"
  },
  {
    title: "Calories",
    key: "calories",
    component: props => <CustomComponent {...props}></CustomComponent>
  },
  {
    title: "Fat (g)",
    key: "fat"
  },
  {
    title: "Carbs (g)",
    key: "carbs"
  },
  {
    title: "Protein (g)",
    key: "protein"
  }
];

const settingPageRow = {
  rowPerPageOptions: [5, 10, 15],
  rowsPerPage: 5
  
};

const StupidTable = props => {
  //   const { settings, data } = props;
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Create table row base on data, and setting key
  // If in tableSetting column has properties component then render component instead of key
  const tableRow = () => {
    return data.map(row => (
      <TableRow key={row.name}>
        {settings.map((setting, index) => (
          <TableCell align={setting.align || "center"} key={index}>
            {setting.component
              ? setting.component({
                  tableData: data,
                  rowData: row,
                  value: row[setting.key]
                })
              : row[setting.key]}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  const tableHeader = () => {
    return (
      <TableRow>
        {settings.map(setting => (
          <TableCell align={setting.align || "center"} key={setting.title}>
            {setting.title}
          </TableCell>
        ))}
      </TableRow>
    );
  };

  // const tableFooter = () => {
  //   return (
  //     <TableFooter>
  //       <TableRow>
  //         <TablePagination
  //           rowsPerPageOptions={[5, 10, 25]}
  //           colSpan={3}
  //           count={rows.length}
  //           rowsPerPage={rowsPerPage}
  //           page={page}
  //           SelectProps={{
  //             inputProps: { "aria-label": "rows per page" },
  //             native: true
  //           }}
  //           onChangePage={handleChangePage}
  //           onChangeRowsPerPage={handleChangeRowsPerPage}
  //           ActionsComponent={TablePaginationActions}
  //         />
  //       </TableRow>
  //     </TableFooter>
  //   );
  // };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>{tableHeader()}</TableHead>
        <TableBody>{tableRow()}</TableBody>
        {/* <TableFooter></TableFooter> */}
      </Table>
    </Paper>
  );
};

StupidTable.propTypes = {
  settings: PropTypes
};

export default StupidTable;
