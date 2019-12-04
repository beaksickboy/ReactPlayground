import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import appRoutes from "../../routes/app-container-routing";
import { LoginNavBar } from "../NavBar";
import SideBar from "../SideBar/SideBar";

class AppContainer extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          {/* <LoginNavBar /> */}
          <SideBar />
        </header>
        <div>
          <Switch>
            {appRoutes.map((route, index) => {
              return <Route key={index} {...route} />;
            })}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
