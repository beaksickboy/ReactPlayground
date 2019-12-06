import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import appRoutes from "../routes/app-container-routing";
import { LoginNavBar, StupidTable } from "../components";

class AppContainer extends React.Component {
  isAuthenticated() {
    if (!this.props.user) {
      return <Redirect to="/login" />;
    }
  }

  render() {
    return (
      // <BrowserRouter>
      //   <header>
      //     <LoginNavBar />
      //   </header>
      //   <div>
      //     {this.isAuthenticated()}
      //     <Switch>
      //       {appRoutes.map((route, index) => {
      //         return <Route key={index} {...route} />;
      //       })}
      //     </Switch>
      //   </div>
      // </BrowserRouter>

      <StupidTable settings={settings} data={data}></StupidTable>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(AppContainer);


////////////////// 
// SETUP DUMMY TABLE

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const data = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("hahaha", 159, 6.0, 24, 4.0),
  createData("Ice cream asd", 237, 9.0, 37, 4.3),
  createData("Eclaidr", 262, 16.0, 24, 6.0),
  createData("Cupcadke", 305, 3.7, 67, 4.3),
  createData("dadsda", 356, 16.0, 49, 3.9)
];

const settings = {
  columns:  [
    {
      title: "Dessert (100g serving)",
      key: "name",
      align: "left",
      sort: {
        direction: "asc",
        param: "dessert"
      }
    },
    {
      title: "Calories",
      key: "calories",
      sort: {
        direction: "desc",
        param: "calories"
      }
      // component: props => <CustomComponent {...props}></CustomComponent>
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
  ],
  paging: {
    rowPerPageOptions: [5, 10, 15],
    rowsPerPage: 15,
    handleChangeRowsPerPage: event => {},
    handleChangePage: (event, newPage) => {},
    colspan: 3,
    page: 0
  }
}